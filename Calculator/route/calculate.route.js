const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/tringle',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/tringle.html'));
});
router.post('/tringle',(req,res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const result = ((base*height)/2);
    res.send(`Here Is the result: ${result}`);
});
router.get('/circle',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/circle.html'));
});
router.post('/circle',(req,res)=>{
    const radius = req.body.redius;
    const result = (Math.PI*Math.sqrt(radius));
    res.send(`Here is the result : ${result.toFixed(2)}`);
});

module.exports = router;