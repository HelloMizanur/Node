const express = require('express');
const app = express();

app.get('/products/:id([0-1]+)',(req,res)=>{
    res.send(`ID : ${req.params.id}`);
});
app.get('*',(req,res)=>{
    res.status(404).send(`Not Valid`);
});

app.listen(3000,()=>{
    console.log(`Server is running `);
})