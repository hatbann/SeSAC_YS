const fs = require("fs");
/* 
fs.readFile("./test.txt", function (err, data) {
    if(err) throw err;

    console.log("data : ", data);
    console.log("data : ", String(data));
})
  */
//프로미스로 불러오겠다고 선언 => 프로미스 함수들을 쓸 수 있다.
const fs2 = require("fs").promises;
/* fs2.readFile("./test.txt")
    .then((res) =>{
        console.log("data : ", String(res));
    })
    .catch((err)=>{
        console.log(err);
    })
 */
fs2.writeFile("./write.txt", "hyebin")
    .then((res)=>{
        return fs2.readFile('./write.txt');
    })
    .then((res) => {
        console.log("data : ", String(res));
    })

fs.writeFile("./write2.txt", "hyebin2", function(err){
    if(err) throw err;
    fs.readFile("./write2.txt", function(err,data){
        if(err) throw err;
        console.log("data : ", String(data));
    })
});