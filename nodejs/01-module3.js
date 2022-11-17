const add = require('./01-module2');


// module2에서는 중괄호로 넘긴게 아니라 add.add 이런식으로 안해도됨
// 이때 호출했을 때 이름은(위의 add)는 변수명이 달라도 된다
/*
console.log(add);
console.log(add());
*/
console.log(add.add);
console.log(add.add());
