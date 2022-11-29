const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: "localhost",
    user: "hyebin",
    password: "1234",
    database: "test1"
})

//sql문, 콜백함수(에러, sql성공시 받을 결과값)
cnn.query('insert into user values("hyebin", "1234", "혜빈", "F", "1999-05-07", "24")', (err, result)=>{
    if(err) console.log(err);
    console.log(result);
})