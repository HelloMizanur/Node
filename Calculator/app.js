const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const calculateRoutes = require('./route/calculate.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.use(calculateRoutes);



module.exports=app;