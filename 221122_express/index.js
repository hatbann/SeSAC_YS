const express = require("express");
const app = express(); //객체생성, 필요한 메소드가 app객체에 있다. 기본코드
const port = 8080; //1023위의 숫자로, 보통 8080 8000 3000 많이함

// static 메소드 : 안의 문자열은 실제 존재하는 폴더명
//첫번째거(/public)은 가상경로
app.use("/public", express.static("static"));
//static이라는 실제 존재하는 폴더를 public이라는 경로로 접근할 수 있도록 함

app.set('view engine', "ejs"); //html 이 아닌 ejs를 view engine으로 쓰겠다


app.get('/', (req,res) =>{
    res.send('Hello Express!');
})

/* localhost:8080/test */
app.get('/test', (req,res)=>{
    res.sendFile(__dirname + "/views/index.html"); //절대경로만 입력하기
})

/* localhost:8080/ejs */
app.get('/ejs', (req,res)=>{
   res.render("index") //view engine으로 설정해서 확장자 안써도됨, 이미 views 폴더임
})

app.listen(port, ()=>{
    console.log("Server Open : ", port);
})