const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostname = '127.0.0.1';

const MyServer = http.createServer((req,res)=>{

    const readFileHandeler = (statusCode, FileLocation) =>{
        fs.readFile(FileLocation, (err,data)=>{
            res.writeHead(statusCode, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    if(req.url === "/"){
       readFileHandeler(200,"./views/index.html");
    }else if(req.url === '/about'){
        readFileHandeler(200,"./views/about.html");
    } else if(req.url === '/contact'){
        readFileHandeler(200,"./views/contact.html");

    } else{
        readFileHandeler(404,"./views/erorr.html");
    }
});

MyServer.listen(PORT,hostname,()=>{
    console.log(`Server is running successfully at http://${hostname}:${PORT}`);
})