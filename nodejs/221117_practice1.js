/* const os = require("os");
console.log("사용 가능한 메모리 : ",os.freemem());
console.log("전체 메모리 용량 : ",os.totalmem());
console.log("홈 디렉토리 경로 : ",os.homedir());

const path = require("path");
const file = __filename;
console.log("경로 구분자 : ",path.sep);
console.log("현재 파일의 확장자 : ",path.extname(file));
console.log("현재 파일의 경로 분리 : ",path.dirname(file).split(path.sep)); */

const url = require('url');
let urlstr = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac');

console.log(urlstr.searchParams.keys());
console.log(urlstr.searchParams.values());
urlstr.searchParams.delete('sm');
console.log(urlstr.searchParams.keys());
urlstr.searchParams.set('name', 'hyebin');
console.log(urlstr.searchParams.getAll('name'));
