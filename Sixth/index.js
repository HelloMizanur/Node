const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';
const MyServer = http.createServer((req, res)=>{
    const fileHandeler = (statusCode,fileLocation)=>{
        fs.readFile(fileLocation, (err,data)=>{
            res.writeHead(statusCode,{"content-Type":"text/html"})
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/'){
       fileHandeler(200,'./views/index.html');
    }else if(req.url === '/about'){
        fileHandeler(200,'./views/about.html');
    }else if(req.url === '/contact'){
        fileHandeler(200,'./views/contact.html');
    }else{
        fileHandeler(200,'./views/erorr.html');
    }
})
MyServer.listen(PORT,hostName,()=>{
    console.log(`server is running succsessfully at http://${hostName}:${3000}`);
});