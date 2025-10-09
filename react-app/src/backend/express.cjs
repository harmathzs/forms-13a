const express = require('express')
const cors = require('cors')
const multer = require('multer')
const ftp = require('basic-ftp')
const fs = require('fs')

const upload = multer({dest: 'data/'})
const app = express()

app.use(cors())
app.use(express.json())

app.post('/file-upload', upload.single("file"), async (req, res)=>{
    console.log('req.body', req.body) // {}
    console.log('req.file', req.file)
    /*
        {
            fieldname: 'file',
            originalname: 'almafa.txt',
            encoding: '7bit',
            mimetype: 'text/plain',
            destination: 'data/',
            filename: '37a778d57d215a5b8778c3bb0a0ce8a1',
            path: 'data\\37a778d57d215a5b8778c3bb0a0ce8a1',
            size: 26
        }    
    */

    const ftpClient = new ftp.Client()        
    try {
        await ftpClient.access({
            host: '192.168.56.1',
            user: 'tester',
            password: 'password',
        })
        await ftpClient.uploadFrom(req.file.path, req.file.originalname)
        
        res.sendStatus(201) // Created OK
    } catch(e) {
        res.sendStatus(500) // Internal server error
    } finally {
        ftpClient.close()
        if (req.file) fs.unlinkSync(req.file.path) // clean up
    }

    
})

var users = [
    {email: 'TEST@doe.com', password: 'TEST1!'},
    {email: 'jill@TEST.com', password: 'TEST2!'},
]

app.post('/login-email', (req, res)=>{
    console.log('req.body', req.body)
    const {email, password} = req.body
    // SELECT email, password FROM users WHERE email={email} AND password={password}
    // AND {email} IS NOT NULL AND {password} IS NOT NULL

    const loggedInUser = users.find(user=> user.email == email && user.password == password )
    
    if (loggedInUser) res.status(200).json({login: true, loggedInUser})
    else res.status(300).json({login: false})
})

const port = 3333
app.listen(port, err=>{
    if (err) console.warn(err)
    else console.log('Backend runs on port', port)
})