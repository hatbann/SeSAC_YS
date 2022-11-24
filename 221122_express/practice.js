const express = require("express");
const app = express();
const port = 8080;

app.use("/static", express.static("static"));
app.set('view engine', "ejs");

//form전송을 위한 type설정
app.use(express.urlencoded({extended:true})); // x-www-unlencoded 데이터 해성
app.use(express.json()); //json형태로



app.get("/img",(req,res)=>{
    res.render("index1");
})

app.get("/form",(req,res)=>{
    res.render('formPractice');
})

app.get("/formPractice",(req,res)=>{
    console.log(req.query);
    res.send({msg: `이름은 ${req.query.name},  생년월일은 ${req.query.year}/${req.query.month}/${req.query.day}`,})
})

app.get("/getPractice",(req,res)=>{
    console.log(req.query);
    res.render('getPractice', {
        data: req.query
    })
 })
 
 
 app.post("/postPractice",(req,res)=>{
     console.log(req.body);
     /*
     res.render('postPractice',{
        data: req.body
     })
     */
 })

app.listen(port, ()=>{
    console.log("server open");
})


