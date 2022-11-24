const express = require("express");
const app = express(); 
const port = 8080; 


app.use("/static", express.static("static"));


app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 
app.set('view engine', "ejs"); 

app.get('/', (req,res)=>{
    res.render('practice');
})

app.post('/form', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, ()=>{
    console.log("server Open");
}) 