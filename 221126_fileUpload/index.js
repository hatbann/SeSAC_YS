const express = require("express");
const multer = require("multer");
const app = express(); 
const port = 8080; 
const path = require("path");

app.use("/static", express.static("static"));


app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 
app.set('view engine', "ejs"); 
/*
const upload = multer({
    dest: "uploads/", //목적지 설정, 여기에 올리겠다
});
*/

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file,done){ //목적지 설정 함수
            done(null, 'uploads/'); // 파라미터 : 에러가있을 때 받는것, 경로
        },
        filename(req,file,done){ //파일 이름 지정 함수
            console.log(req.body); // 해당 input file전까지의 body만 받아서 name2는 안나옴!
            const ext = path.extname(file.originalname);
            //const filename = Date.now() + ext;
            const filename = req.body.name + ext;
            done(null, filename);
        }
    })
})




//test 와 test2를 하고 요청처리를 한다는게 미들웨어 함수 실행시키고 하겠다는 의미
app.get('/' , test, test2,(req,res)=>{
    console.log("hello"); //4
    res.send("Hello");
})

app.get('/file', (req,res)=>{
    res.render('file');
})

app.post('/upload', upload.single("userfile"), (req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send("Upload Complete");
})

app.post('/upload-array', upload.array("userfile2"), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
})


app.post('/upload-fields', upload.fields([{name:'file3'}, {name:'file4'}, {name:'file5'}]), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
})


function test(req,res,next){
    console.log(req.query); //1
    console.log("test 함수입니다"); //2
    next(); 
}

function test2(req,res,next) {
    console.log("tes2함수입니다"); //3
    next();
}

app.listen(port,function(){
    console.log("Server Open : ", port);
})