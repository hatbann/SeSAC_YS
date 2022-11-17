/* function func1(call) {
    call();
}


function func2() {
    console.log('2');
}

//익명함수 형태로 콜백넣기
func1(function () {
    console.log('1');
})

//만든 함수를 넣기
func1(func2);

 */


/* console.log("-------------START--------------");
function login(id, cb) {
    setTimeout(()=>{
        console.log('x');
        cb(id);
    },2000);
}

const id = login("kim", function(id){
    console.log(id + '님 환영합니다!');
    console.log("------------FINISH-------------");
}); */

/*
-------------START--------------
undefined님 환영합니다!
------------FINISH-------------
x
*/

/*
-------------START--------------
x
kim님 환영합니다!
------------FINISH-------------
*/

/* 
 function login(id,pw,cb) {
    setTimeout(()=>{
        console.log("사용자");
        cb(id);
    },3000);
}

function getVideo(id, cb) {
    setTimeout(()=>{
        console.log(id + "의 비디오 리스트");
        cb(['아바타', '라라랜드']);
    },2000);
}

function getDetail(video, cb) {
    setTimeout(()=>{
        cb("비디오 제목 : " + video);
    },1000);
}


login('kim', '1234', function (user) {
    getVideo(user, function (videos) {
        getDetail(videos[0], function(msg){
            console.log(msg);
        })
    })
});
 */

function login(id) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("사용자");
            res(id);
        },3000);
    })
}

function getVideo(id) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(id + "의 비디오 리스트");
            res(['아바타', '라라랜드'])
        },2000);
    })
}

function getDetail(video) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("비디오 제목 : " + video)
        },1000);
    })
}

login('kim').then((res) => getVideo(res))
    .then((res) => getDetail(res[0]))
    .then((res) => console.log(res)); 


