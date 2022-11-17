/*
const result = require('./01-module1');


console.log(result);
console.log("a : " ,result.a);
console.log("b :",result.b);
console.log("test : ", result.test);
result.test(); //함수 실행시 소괄호 붙이기
*/

const num = require('./01-module1');
const a = num.a;
const b = num.b;

function add(){
    return a + b;
}

//module.exports = add;
module.exports = {
    add
};