let form = document.querySelector('#loginForm');

    
function loginFunc(){
    axios({
        method: "post",
        url: "/login",
        data:{
            userid: form.userid.value,
            userpw : form.userpw.value,
        }
    }).then(()=>{
        location.href = '/';
    })
}