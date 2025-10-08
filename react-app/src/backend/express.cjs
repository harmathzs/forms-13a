const express = require('express')
const cors = require('cors')
const multer = require('multer')

const upload = multer({dest: 'data/'})
const app = express()

app.use(cors())
app.use(express.json())

app.post('/file-upload', upload.single("file"), (req, res)=>{
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

    res.sendStatus(200)
})

const port = 3333
app.listen(port, err=>{
    if (err) console.warn(err)
    else console.log('Backend runs on port', port)
})