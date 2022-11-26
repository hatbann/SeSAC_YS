const express = require("express");
const multer = require("multer");
const app = express(); 
const port = 8080; 
const path = require("path");

app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads"));


app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 
app.set('view engine', "ejs"); 

const upload = multer({
    storage : multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done){
            console.log(req.body);
            const ext = path.extname(file.originalname);
            const filename =  req.body.id + ext;
            console.log(filename);
            done(null,filename);
            }
        })
    })

app.get('/', (req,res)=>{
    res.render('form')
})


app.post('/join', upload.single('userprofile'),(req,res)=>{
    console.log(req.file);
    const path = req.file.path;
    res.render('profile',{
        filepath : path
    });
})



app.listen(port,function(){
    console.log("Server Open : ", port);
})