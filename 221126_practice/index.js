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

const dynamicUpload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            const filename = Date.now() + ext;
            done(null, filename);
        }
    })
})

app.get('/join', (req,res)=>{
    res.render('form')
})


app.post('/join', dynamicUpload.single('dynamicfile'),(req,res)=>{
    res.send({path : req.file.path});
})

app.get('/dynamicForm', (req,res)=>{
    res.render('dynamicForm');
})


app.post('/dynamicForm' , dynamicUpload.single('dynamicfile'), (req,res)=>{
    res.send({path : req.file.path});
    
})


app.listen(port,function(){
    console.log("Server Open : ", port);
})