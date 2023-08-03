const express = require('express');
const router = express.Router();
const path = require('path');

// Addition with out func
router.get('/add',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/add.html'));
});
router.post('/add',(req,res)=>{
    const firstNum = parseInt(req.body.firstNum);
    const secondtNum = parseInt(req.body.secondtNum);
    if(isNaN(firstNum) || isNaN(secondtNum)){
        res.status(404).send(`Invalid inout. Please provide valid number`)
    } else { 
        const result = firstNum + secondtNum;
        res.send(`${firstNum} + ${secondtNum} = ${result}`);
     }  
});

// Substraction 
router.get('/sub',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/sub.html'));
});
router.post('/sub',(req,res)=>{
    const firstNum = parseInt(req.body.firstNum);
    const secondtNum = parseInt(req.body.secondtNum);
    if(isNaN(firstNum) || isNaN(secondtNum)){
        res.status(404).send(`invalid input. Please enter correct one`)
    } else {
        const result = firstNum-secondtNum;
        res.send(`${firstNum} - ${secondtNum} = ${result}`);
    }
});
module.exports=router;