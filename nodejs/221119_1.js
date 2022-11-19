/* function func1(name,callback){
    console.log("func1");
    console.log(callback);
    callback(name);
}

function func2(name){
    console.log("func2");
    console.log("name : ", name);
}

func1("kim",func2); */

/* ----------프로미스 형태------------ */
/* 
new Promise(function(res, rej){

}) */

/* function func1() {
    return new Promise(function (res,rej) {
        res("성공");
    });
}


function func2() {
    return new Promise(function (res,rej) {
        setTimeout(function(){res("성공")}, 1000);
    });
}
*/


/* let a = func1();
let b = func2();
console.log(a); // Promise { '성공' }
console.log(b); //Promise { <pending> } */

/* func1().then(function(result) {
    console.log("result : ", result);
});

//then은 func2가 pending 에서 fulfilled로 넘어갈 때 then의 함수가 실행되게 동기적으로 만든다
func2().then(function(result){
    console.log("result : ", result);
    return 'a';
}).then(function(abc){
    console.log("abc : " , abc);
}); 
 */


/* new Promise(function(resolve,reject){
    resolve : 함수형태, 성공했을 때 실행할 함수
    reject : 함수형태, 실패 or 에러 처리할 때 사용될 함수
})
 */


/* function func3(flag) {
    return new Promise(function (res, rej) {
        if(flag){
            res("flage는 true");
        }else{
            rej("flag는 false");
        }
    });
}
 */

/* --------------- catch말고 두번째 함수로 넣어도 reject 받을 수 있다 ---------- */
/* func3(false).then(function msg(res) {
    console.log("msg 1 : ", res);
}, function msg2(rej) {
    console.log("msg 2 : ", rej);
})
 */

/* --------------- catch로 reject 받는 법 ------------------ */
/* func3(false).then(function msg(res) {
    console.log("msg 1 : ", res);
}).catch(function msg(rej) {
    console.log("msg 2 : ", rej);
}) */


//then안에 두번째 함수와 catch가 동시에 있으면 then에서 처리한다 : msg2가 출력
/* func3(false).then(function msg(res) {
    console.log("msg 1 : ", res);
}, function msg2(rej) {
    console.log("msg 2 : ", rej);
}).catch(function msg(rej) {
    console.log("msg 3 : ", rej);
}) */



