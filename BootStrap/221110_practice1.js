const ticketingBtn = $('#ticketing');
const select = $('#selectmovie');

let seats = $('td[class!=transparent]'); //모든 좌석에 대한 정보

settingPage();

let selectedTds = []; //지금 선택되고있는 좌석정보


//영화정보
const movies = {
    0 : {
        src : "./assets/빅히어로_포스터.jpg",
        title : "빅히어로"
    },
    1 : {
        src : "./assets/인사이드아웃_포스터.jpg",
        title : "인사이드아웃"
    },
    2 : {
        src : "./assets/업_포스터.jpg",
        title : "업"
    },
}


//좌석 선택시 색 변하는 이벤트
$('td').click(function(){
    $(this).toggleClass('green');
    $(this).toggleClass('red');
    $(this).hasClass('red') ? makeRed(this):makeGreen(this);
})


//예매하기 버튼 클릭시 이벤트
$('#ticketing').click(function(){
    ticketing();
    

})


//영화 선택시 이벤트
select.change(function(){
    select.val() !== "default" ? 
      showImg()
     :
     hideImg()
})




/* ****이벤트에 쓰일 함수들****  */

//영화 이미지 보여주기
const showImg = function () {
    $('#movieImg').removeClass('transparentImg');
    $('#sample').addClass('transparentImg');
    let movie = movies[select.val()];
    $('#movieImg').attr('src', movie.src);

    
}

//영화 이미지 가리기
const hideImg = function () {
    $('#movieImg').addClass('transparentImg');
    $('#sample').removeClass('transparentImg');
}


const ticketing = function(){
    selectedTds.map((td)=>{
        $(td).addClass('grey');
    })
    updateSelectedSeats();
}

function settingPage(){
    /*
    seats.map((i, val)=>{
        console.log(`val = '${val}, i : ${i}`);
    })
    */
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    //console.log(selectedSeats);
    if(selectedSeats !== null && selectedSeats.length > 0){
        selectedSeats.map((i, val)=>{
            //console.log(i);
            $(seats[i]).removeClass('green');
            $(seats[i]).addClass('grey');
        })
    }
}

function updateSelectedSeats(){
    const selectedSeats = $('td[class=grey]'); //html 에서 grey인 td모두 가져오기, 이미 예매된
    let selectedSeatsIndex = [];
    //console.log(selectedSeats);
    selectedSeats.map((i,seats)=>{
        console.log(seats.dataset.seatnum);
       selectedSeatsIndex.push(seats.dataset.seatnum);
    });
    selectedTds.map((td)=>{
        selectedSeatsIndex.push(td.dataset.seatnum);
    })

    //console.log(selectedSeatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsIndex));
}

function makeRed(td){
    ticketingBtn.removeClass('notSelected');
    ticketingBtn.addClass('selected');
    ticketingBtn.removeAttr('disabled');
    selectedTds.push(td);
}

function makeGreen(td){
    ticketingBtn.removeClass('selected');
    ticketingBtn.addClass('notSelected');
    selectedTds.pop(td);
}