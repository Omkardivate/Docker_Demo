var  express=require('express');

var app= express();

// app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get("/welcome", (req,res)=>{
    res.sendFile(path.join(__dirname, '/welcome.html'))
})

app.listen(8080);
console.log("listening on port 8080");