//scroll값에 따른 이벤트
window.onload = function () {
  var section = document.getElementsByTagName("section")
  var menu = document.querySelector(".menu");
  var content_3_1 = document.querySelector(".content-3-1");
  var content_3_2 = document.querySelector(".content-3-2");
  var content_3_3 = document.querySelector(".content-3-3");
  var timer = document.querySelector(".timer");

window.addEventListener("scroll",() => {
  section1_scroll()
  section2_scroll()
})
  //section[1] 스크롤 이벤트(timer)
  function section1_scroll() {
    const scroll = window.scrollY;
      if (scroll >= section[1].offsetTop && scroll <= section[1].offsetTop + section[1].offsetHeight) {
        timer.classList.add("black");
    } else {
        timer.classList.remove("black")
    }
  }
  section1_scroll()
  //section[2] 스크롤 이벤트
  function section2_scroll() {
    const scroll = window.scrollY;
    if (scroll >= section[2].offsetTop) {
      content_3_1.classList.add("content3-1_appear");
      content_3_2.classList.add("content3-2_appear");
      content_3_3.classList.add("content3-3_appear");
    }
  }
    section2_scroll()

// -------------------------------------------------
//버튼 클릭시 명언 사라짐
let saying = document.querySelector(".saying");
let buttonClick = document.getElementsByTagName("button")[0];

buttonClick.addEventListener("click", function(){
  saying.classList.add("vanish");
  setTimeout(movement, 700);
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



  document.querySelector(".timer .Economic").innerHTML = `<img src="images/education.png" /><h2>초등임용고시</h2><br>D-${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다.`;
  document.querySelector(".timer .middle").innerHTML = `<h2>중등임용고시</h2><br>D-${day2}일 ${hour2}시간 ${min2}분 ${sec2}초 남았습니다.`;
  // document.querySelector(".timer .middle").innerHTML = `<img src="images/police.png" /><h2>경찰고시</h2><br>D-${day2}일 ${hour2}시간 ${min2}분 ${sec2}초 남았습니다.`;
}, 1000);
// -------------------------------------------------
/*let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let show = document.querySelector(".show");
let show_li = document.querySelectorAll(".show li");

let li_length = show_li.length;
let slideCount = 0;

function move(num) {
  show.style.transform = `translate(${-num * 500}px)`
  slideCount = num;
}

prev.addEventListener("click", () => {
  if (slideCount !== 0) {
    move(slideCount - 1);
  }
})

next.addEventListener("click", () => {
  if (slideCount !== li_length - 1) {
    move(slideCount+1)
  }
})*/
// -------------------------------------------------  
}

