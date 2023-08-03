const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);

app.post('/user', (req,res)=>{
    const name = req.body.name;
    res.send(`Wellcome ${name}`);
});

app.get('/',(req,res)=>{
    const id = req.query.id;
    res.end(id);
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;