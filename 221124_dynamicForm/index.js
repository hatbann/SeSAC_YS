const express = require("express");
const app = express(); 
const port = 8080; 


app.use("/public", express.static("static"));


app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 
app.set('view engine', "ejs"); 

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/form', (req,res)=>{
    console.log(req.query);
    res.send({msg: `get : 이름은 ${req.query.name},  나이는 ${req.query.age}`,});
})

app.post('/form', (req,res)=>{
    console.log(req.body);
    res.send({msg: `post : 이름은 ${req.body.name},  나이는 ${req.body.age}`,});
})

app.listen(port,function(){
    console.log("Server Open : ", port);
})