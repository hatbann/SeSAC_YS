let list = ['apple', 'banana'];
/* [item1, item2] = list;
console.log(item1);
console.log(item2);
 */


//기본값 = 없을때 대체하는 것
/* [item1, item2 = 'peach', item3 = 'orange'] = list;
console.log(item1); //apple
console.log(item2); //banana
console.log(item3); //orange */

/* let x = 1;
let y = 3; */
//임시 변수 안 만들고 바꾸는 법
/* [y,x] = [x,y];
console.log(x); //3
console.log(y); //1 */

/* let obj = {
    key1 : 'one',
    key2 : 'two',
};

//let key1 = obj.key;
//객체 구조분해는 순서가 아닌, 이름이 같은 것을 찾는다
//객체의 이름을 바꾸고 싶으면 원래이름:바꾸고싶은이름 의 구조
let {key2,key1 : a, c = 'three'} = obj;
console.log(a);  //one
console.log(key2);  //two
console.log(c); //three
 */


//나머지 연산, 스프레드
/* let obj = {
    a : "1",
    b : "2",
    c : "3",
}


let {b, ...rest} = obj;
console.log(b); //2
console.log(rest); //{ a: '1', c: '3' } */


