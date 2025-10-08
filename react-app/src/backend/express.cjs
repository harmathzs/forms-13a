const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/file-upload', (req, res)=>{
    console.log('req.body', req.body)

    res.sendStatus(200)
})

const port = 3333
app.listen(port, err=>{
    if (err) console.warn(err)
    else console.log('Backend runs on port', port)
})