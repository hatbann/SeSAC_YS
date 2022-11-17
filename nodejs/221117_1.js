/* ***global 내장 객체*** */
/*
console.log(global);
console.log(global.console);

*/

/* ****console***** */
/*
let obj = {
    out : {
        in : {
            key: 'value'
        }
    }
}

console.log(obj);
console.log(obj["out"]);
console.error('error');
console.time("시간"); //이것과
console.timeEnd("시간"); //이것은 들어가는 게 같아야한다
console.table([{name: 'abc'}, {name: 'def'}]);
console.dir(obj, {colors : true, depth:1});
console.dir(obj, {colors : true, depth:2});
console.trace("error");
*/


/* *****Timer****** */
/* const func1 = setTimeout(function(){
    console.log("1.5초후 실행");
},1500);

const func2 = setInterval(()=>{
    console.log("1초마다 반복");
},1000);

const func3 = setTimeout(()=>{
    console.log("func3 실행");
},3000);

setTimeout(()=>{__
    clearTimeout(func3);
    clearInterval(func2);
},2500);

const func4 = setImmediate(()=>{
    console.log("func4 즉시실행");
});

const func5 = setImmediate(()=>{
    console.log("func5  즉시 실행");
})

clearImmediate(func5);
*/
/*
func4 즉시실행
1초마다 반복
1.5초후 실행
1초마다 반복
*/ 


/* console.log("__filename : " , __filename); //__filename :  C:\Users\SBAUser\SeSAC_YS\nodejs\221117_1.js
console.log("__dirname : ", __dirname); //__dirname :  C:\Users\SBAUser\SeSAC_YS\nodejs
 */

/* *****Process 객체 : 현재 실행중인 노드 프로세스 정보****** */
/* console.log("process.version : ", process.version);
console.log("process.arch : ", process.arch);
console.log("process.platform : ", process.platform);
console.log("process.cpuUsage : ", process.cpuUsage()); */


/* ****OS모듈 - 운영체제, 모듈이라 가져와서 사용해야함****** */
/* const os = require("os");
console.log("os.type : ",os.type()); //Windows_NT
console.log("os.cpus : ",os.cpus());
console.log("os.homedir : ",os.homedir());
console.log("os.freemem : ",os.freemem()); */


/* ****Path 모듈**** */
/* const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file)); // .js : 확장자 이름 가져오기
console.log("path.parse : ", path.parse(file)); // 구분자별로 가져올 수 있는걸 모두 가져오기 */

/* ****url모듈**** */
const url = require("url");
/* console.log(url);
console.log(url.parse); //함수
console.log(url.URL); //class


let obj = url.parse("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=h3UgRdprvh8sslx%2Fu6NssssssuR-451625");
console.log(obj);
console.log(url.format(obj)); //다시 문자열로 바꾸기
console.log(obj.host);

let urlstr = new url.URL("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=h3UgRdprvh8sslx%2Fu6NssssssuR-451625");
console.log(urlstr);
console.log(urlstr.searchParams.getAll('where'));
 */

/* let str = new url.URL("http://localhost?name=hyebin&name=hatban&age=24");
console.log(str);
console.log(str.searchParams.getAll('name')); //[ 'hyebin', 'hatban' ]
console.log(str.searchParams.keys()); //URLSearchParams Iterator { 'name', 'name', 'age' }
console.log(str.searchParams.values()); //URLSearchParams Iterator { 'hyebin', 'hatban', '24' }

str.searchParams.append('age', 28);
console.log(str.searchParams.getAll('age')); //[ '24', '28' ]

console.log(str.searchParams.has('age')); //true
console.log(str.searchParams.has('favorite')); //false */