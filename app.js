const express = require('express');
const os = require('os');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({     
    extended: true})); 
   app.use(cors())

app.get('/',(req,res)=>{
    res.send("Server started");
})

app.post('/index',(req,res)=>{
    console.log(req.body.name);
    console.log(req.ip);
    console.log(req.ips);
    console.log(os.version());
    console.log(os.arch());
    console.log(os.hostname());
    console.log(os.machine());
    console.log(os.userInfo())
})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})