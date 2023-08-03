const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use(userRouter);

app.get('/',(req,res)=>{
    res.end('Hello Bangladesh');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;