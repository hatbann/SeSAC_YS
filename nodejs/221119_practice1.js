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


function login(id,pw) {
    return new Promise(function(res, rej){
        setTimeout(()=>{
            console.log("사용자");
            res(id);
            // cb(id);
        },3000);
    })
}

function getVideo(id) {
    return new Promise(function(res, rej){
        setTimeout(()=>{
            console.log(id + "의 비디오 리스트");
            res(['아바타', '라라랜드']);
            //cb(['아바타', '라라랜드']);
        },2000);
    })
}

function getDetail(video) {
    return new Promise(function(res, rej){
        setTimeout(()=>{
            res("비디오 제목 : " + video);
            //cb("비디오 제목 : " + video);
        },1000);
    })
}


/* login("kim", 1234)
    .then(function(res){
        return getVideo(res);})
    .then(function(res){
        return getDetail(res[0]);})  
    .then(function(res){
        console.log(res);
    }); */

/* login("kim", 1234)
    .then((res)=> getVideo(res))
    .then((res)=> getDetail(res[0]))
    .then((res)=> console.log(res)); */


    