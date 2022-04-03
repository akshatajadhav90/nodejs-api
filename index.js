//create your own server 

const http=require("http");
const fs=require("fs");


const server = http.createServer((req, res)=>{
    //console.log(req.url);

    if(req.url=="/"){
        res.end("hey! welcome on home page");
    } else if(req.url=="/about"){
        res.end("hey! welcome on AboutUs page");

    } else if(req.url=="/contact"){
        res.end("hey! welcome on ContactUs page");
    } else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/userapi/userapi.json`, "utf8",(err, data)=>
        {
            console.log(data);

            const objData=JSON.parse(data);
            
            res.end(objData[0].name);
        });

    }else{
        res.end("404 erroe pages. page doesn't exist");
    }
    
});

//creating request to the server

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the pot no 8000");
});