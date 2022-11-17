const {Car} = require('./221117_3'); //구조분해라서 이름 같게
let carA = new Car('red');
let carB = new Car('orange');
let carC = new Car('yellow');
console.log("CarA color : ", carA.returnColor());
console.log("CarB color : ", carB.returnColor());
console.log("CarC color : ", carC.returnColor());