const http = require("http");
const fs = require("fs").promises;

//req : 클라이언트가 서버에게 요청하는 내용 , res : 서버가 클라이언트에게 응답하는 내용 
const server = http.createServer(function(req,res){
    fs.readFile('../css/221029_practice_2.html')
    .then(function(data){
        res.end(String(data));
    })
/*     fs.readFile('./221029_practice_2.html')
    .then(function(data){
        res.end(String(data));
    }) */
});


server.listen(8080, function(){
    console.log('8080번 포트로 실행');
})