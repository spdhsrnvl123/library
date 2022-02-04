//scroll값에 따른 이벤트
window.onload = function () {
  var section = document.getElementsByTagName("section")
  var menu = document.querySelector(".menu");
  var content_3_1 = document.querySelector(".content-3-1");
  var content_3_2 = document.querySelector(".content-3-2");
  var content_3_3 = document.querySelector(".content-3-3");
  var timer = document.querySelector(".timer");
  
  var pointBtn = document.querySelectorAll(".pointWrap li");
  var pageNum = 0;  

  //네비게이션바
/*for (var i = 0; i < pointBtn.length; i++){
  (function (idx) {
    pointBtn[idx].onclick = function () {
      pageNum = idx;
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior: 'smooth'
      })
    }
  })(i);
}*/
 /*
  for (let i = 0; i < pointBtn.length; i++){
    pointBtn[i].onclick = function(){
      pageNum = i;
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior:'smooth'
      })
    }
  }*/
  
  for (let i = 0; i < pointBtn.length; i++){
    pointBtn[i].addEventListener("click", function () {
      pageNum = i;
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior:'smooth'
      })
    })
  }

window.addEventListener("scroll",() => {
  section1_scroll();
  section2_scroll();
})
  
  //section[1] 스크롤 이벤트(timer)
  function section1_scroll() {
    const scroll = window.scrollY;
    if (scroll >= section[1].offsetTop - window.innerHeight / 2 && scroll <= section[1].offsetTop + section[1].offsetHeight - window.innerHeight/2) {
        timer.classList.remove("display");
        timer.classList.add("black");
      }else if (scroll >= section[0].offsetTop - window.innerHeight/2 && scroll <= section[0].offsetTop + section[0].offsetHeight - window.innerHeight/2) {
        timer.classList.remove("display");
        timer.classList.remove("black");
      }else if (scroll >= section[2].offsetTop - window.innerHeight /2 && scroll <= section[2].offsetTop + section[2].offsetHeight - window.innerHeight/2) {
        timer.classList.add("display");
    }
  }
  section1_scroll();
  //section[2] 스크롤 이벤트
  function section2_scroll() {
    const scroll = window.scrollY;
    if (scroll >= section[2].offsetTop) {
      content_3_1.classList.add("content3-1_appear");
      content_3_2.classList.add("content3-2_appear");
      content_3_3.classList.add("content3-3_appear");
    }
  }
  section2_scroll();

// -------------------------------------------------
//버튼 클릭시 명언 사라짐
let saying = document.querySelector(".saying");
let buttonClick = document.getElementsByTagName("button")[0];

buttonClick.addEventListener("click",function(){
  saying.classList.add("vanish");
  setTimeout(movement, 600);
})
let movement = () =>{
  window.scrollTo({
    top: section[1].offsetTop,
    behavior: "smooth"
  })
}
// -------------------------------------------------
// D-day계산기
var dday = new Date("2022,10,13").getTime();
var dday_2 = new Date("2022,10,27").getTime();

setInterval(() => {
  var today = new Date().getTime();

  var gap = dday - today;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);

  var gap_2 = dday_2 - today;
  var day2 = Math.ceil(gap_2 / (1000 * 60 * 60 * 24));
  var hour2 = Math.ceil((gap_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min2 = Math.ceil((gap_2 % (1000 * 60 * 60)) / (1000 * 60));
  var sec2 = Math.ceil((gap_2 % (1000 * 60)) / 1000);

  document.querySelector(".timer .Economic").innerHTML = `<img src="images/study.jpeg" style= "border-radius : 50%" /><h2>Programming Test</h2><br>D-${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다.`;
  document.querySelector(".timer .middle").innerHTML = `<h2>Programming Test2</h2><br>D-${day2}일 ${hour2}시간 ${min2}분 ${sec2}초 남았습니다.`;
}, 1000);
}