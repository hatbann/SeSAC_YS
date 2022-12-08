const express = require("express");
const app = express();
const port = 8000;

const session = require("express-session");
app.use(session({
    secret:'1234' , //무조건 써야함, 암호화 결정,임의의 문자열로 암호화
    resave: false, //변경사항 없어도 다시 저장할건지 안할건지
    saveUninitialized:true, //초기화 되지 않은 세션을 저장하냐 안하냐
    /*cookie:{
        httpOnly: true,
        maxAge: 10000,
    },*/
   // secure:, // 보안서버에서만 작동하냐 안하냐
}))


app.set('view engine', "ejs"); //html 이 아닌 ejs를 view engine으로 쓰겠다


app.use(express.urlencoded({extended:true})); // x-www-unlencoded 데이터 해성
app.use(express.json()); //json형태로

app.use("/static", express.static("static"));


app.get('/',(req,res)=>{
    if(req.session.user){
        //로그아웃 뜨게
        console.log("세션있음");
        res.render("main", {
            islogin : true,
            id : req.session.user,
        })
    }else{
        //로그인창 뜨게
        console.log("세션없음");
        res.render("main",{
            islogin: false,
            id : '',
        })
    }
})


app.get('/login',(req,res)=>{
    res.render('login');
})



const user = {
    id : "hhbbcho",
    pw : "1234"
}

//로그인을했을때만 세션에 저장
//로그아웃 했을 때는 세션에 삭제
app.post('/login', (req,res)=>{
    //로그인 정보 맞는지, 로그인 시켜야할지 말아야할지
    if(req.body.userid === user.id && req.body.userpw === user.pw){
        req.session.user = req.body.userid;
        console.log("성공");
        res.render("main",{
            islogin: true,
            id : req.session.user,
        })
    } else{
        res.render("login");
    }  
})


app.post('/logout', (req,res)=>{
    console.log("logout");
    req.session.destroy(function(err){
        if(err) throw err;
        res.send("로그아웃 성공");
    })

})






app.listen(port, ()=>{
    console.log("server open", port);
})