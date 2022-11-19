const fs = require("fs").promises;

fs.writeFile('./sesac.txt', "반갑습니다")
    .then((res)=>{
       return fs.copyFile("./sesac.txt", "./sesac2.txt");
    })
    .then((res)=>{
        return fs.rename('./sesac2.txt', "./new.txt");
    });