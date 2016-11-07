const express = require('express')
const app = express()
const serv = require('http').Server(app)
const DEBUG = true


app.get('/',(req,res)=>{ res.sendFile(__dirname+'/index.html')
})
app.use(express.static('/dist'))


serv.listen(8080)
console.log('Server started');
