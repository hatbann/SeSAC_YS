let closeBtn = document.querySelector('#closeBtn');
let modal = document.querySelector('#modal');

function sendPost(){
  let form  = document.querySelector('#forminfo');
  
  //안보이게
  if(form.display.checked){
    axios({
    method: "post",
            url : "/",
            data : {
              popup : "0"
            },
        }).then(()=>{
          modal.classList.remove('display');
          modal.classList.add('displayx');
        });
  }
  else{
    axios({
    method: "post",
            url : "/",
            data : {
              popup : "1"
            },
        }).then(()=>{
          modal.classList.remove('display');
          modal.classList.add('displayx');
        });
}
  }