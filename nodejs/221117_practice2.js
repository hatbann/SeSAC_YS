/* function call(name, func) {
    setTimeout(()=>{
        console.log("사용자는 " + name);
        func("call");
    },2000);
}
function back(func) {
    setTimeout(()=>{
        func( "back");
    }, 1000);
}
function hell(func) {
    setTimeout(()=>{
        func("hell");  
    },1500);
}

call('kim', function(a){
    console.log( "시작은 " + a);
    back(function(b){
        console.log( "두번째는 " + b );
        hell(function(c){
            console.log( "세번째는 " + c)
        })
    })
}); */


function call(name) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("사용자는 " + name);
            res("call")
        },2000);
    })
}
function back(call) {
    console.log( "시작은 " + call);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("back")
        }, 1000);
    })
}
function hell(back) {
    console.log( "두번째는 " + back );
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("hell");
    },1500)
    });
}

call('kim').then((res)=> back(res))
            .then((res) => hell(res))
            .then((res)=> console.log( "세번째는 " + res));