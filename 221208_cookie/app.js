const express = require("express");
const app = express();
const port = 8000;


app.set('view engine', "ejs"); //html 이 아닌 ejs를 view engine으로 쓰겠다


const cookieParser = require("cookie-parser");
const { restart } = require("nodemon");
app.use(cookieParser());

app.use(express.urlencoded({extended:true})); // x-www-unlencoded 데이터 해성
app.use(express.json()); //json형태로

app.use("/static", express.static("static"));


const cookieOption2 = {
    httpOnly: true,
    maxAge:3600000, 
}
app.get('/', (req,res)=>{


    //1이면 보여주고 0이면 안보여주기
    if(!req.cookies.popup || req.cookies.popup === "1"){
        console.log("1");
        res.render("index",{
            popup: "display"
        });
    }
    else{
        res.render("index",{
            popup: "displayx"
        });
    }
})

app.post('/', (req,res)=>{
    console.log("body : ", req.body.popup);

    
    if( req.body.popup  === "1"){
        res.cookie("popup", "1", cookieOption2);
        res.render("index",{
            popup: "display"
        });
    }
    else{
        res.cookie("popup", "0", cookieOption2);
        res.render("index",{
            popup: "displayx"
        });
    }
})





const cookieOption = {
    httpOnly: true, // 브라우저 상에서 쿠키정보는 document.cookies로 볼 수 없다
    maxAge:15000, //만들어진 순간부터 초(ms단위)만큼 이후 만료
    //expires:'2022-12-09T09:00:00', //GMT시간 2022-12-08T
    //path:'/a', // localhost:8000엔 쿠키없음 localhost:8000/a/~~~ 이후 모든 경로에 생김 
    //secure: true , //true면 https에만 적용된다
    //signed: true, //암호화 유무
}


//서버가 클라이언트한테 쿠키를 생성해서 보내줌
app.get('/set', (req,res)=>{
    res.cookie("testKey", "1", cookieOption)
    res.send("쿠키 생성 성공");
})


//쿠키는 클라이언트(브라우저)가 갖고 있어서 req를 통해 가져올 수 있다
app.get('/get', (req,res)=>{
    res.send(req.cookies.testKey);
})

app.listen(port, ()=>{
    console.log("server open", port);
})