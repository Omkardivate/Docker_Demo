var  express=require('express');
var path = require('path');
var app= express();

// app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '/html/index.html'))
})

app.get("/welcome.html", (req,res)=>{
    res.sendFile(path.join(__dirname, '/html/welcome.html'))
})

app.listen(8080);
console.log("listening on port 8080");