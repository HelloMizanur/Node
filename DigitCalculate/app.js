const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Calrouter = require('./routes/calculate.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

app.use(Calrouter);

module.exports=app;