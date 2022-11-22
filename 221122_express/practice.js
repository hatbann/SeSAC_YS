const express = require("express");
const app = express();
const port = 8080;

app.use("/static", express.static("static"));
app.set('view engine', "ejs"); 


app.get("/img",(req,res)=>{
    res.render("index1");
})

app.listen(port, ()=>{
    console.log("server open");
})