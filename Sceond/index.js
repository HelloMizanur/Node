const fs = require("fs");
fs.writeFile("demo1.txt", "I am Mizanur rahman", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Success")
    }
})

fs.appendFile("demo1.txt", " I am 27 years old", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Success")
    }
})

fs.readFile("demo1.txt", "utf-8", (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})

fs.unlink("demo1.txt",(result)=>{
    if(result){
        console.log("Not Delete")
    }else{
        console.log(" Dlete")
    }
})