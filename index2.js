let show = document.querySelector(".show");
let class_detail_img = document.querySelector(".class_detail_img");
let caption = document.querySelectorAll(".caption");
let space_text = document.querySelectorAll(".space_text")
let p = document.getElementsByTagName("p")

/*
show.addEventListener("click", function (e) {
  if (e.target.tagName != 'DIV' && e.target.tagName != 'P') return;
    class_detail_img.classList.add("Space_2");
})
*/


show.addEventListener("click", function (e) {
  for (i = 0; i < caption.length; i++){
    if (e.target.contains(space_text[i]) || e.target.contains(caption[i]) || e.target.contains(p[i])) {
      class_detail_img.classList.add(`Space_${i}`);
    } else {
      class_detail_img.classList.remove(`Space_${i}`);
    }
  }
})
  
/*
show.addEventListener("click", function (e) {
  if (e.target.contains(space_text[0]) || e.target.contains(caption[0]) || e.target.contains(p[0])) {
    class_detail_img.classList.add("Space_0");
  } else {
    class_detail_img.classList.remove("Space_0");
  }
  if (e.target.contains(space_text[1]) || e.target.contains(caption[1]) || e.target.contains(p[1])) {
    class_detail_img.classList.add("Space_1");
  }else {
    class_detail_img.classList.remove("Space_1");
  }
  if (e.target.contains(space_text[2]) || e.target.contains(caption[2]) || e.target.contains(p[2])) {
    class_detail_img.classList.add("Space_2");
  }else {
    class_detail_img.classList.remove("Space_2");
  }
  if (e.target.contains(space_text[3]) || e.target.contains(caption[3]) || e.target.contains(p[3])) {
    class_detail_img.classList.add("Space_3");
  }else {
    class_detail_img.classList.remove("Space_3");
  }
  if (e.target.contains(space_text[4]) || e.target.contains(caption[4]) || e.target.contains(p[4  ])) {
    class_detail_img.classList.add("Space_4");
  }else {
    class_detail_img.classList.remove("Space_4");
  }
  console.log(e.target)
})
*/