let show = document.querySelector(".show");
let class_detail_img = document.querySelector(".class_detail_img");
let caption = document.querySelectorAll(".caption");
let space_text = document.querySelectorAll("space_text")


show.addEventListener("click", function (e) {
  if (e.target.contains(caption[0]) || e.target.classList.contains(space_text[0])) {
    class_detail_img.classList.add("Space_0");
  } else {
    class_detail_img.classList.remove("Space_0");
  }
  if (e.target.contains(caption[1]) || e.target.classList.contains(space_text[1])) {
    class_detail_img.classList.add("Space_1");
  }else {
    class_detail_img.classList.remove("Space_1");
  }
  if (e.target.contains(caption[2]) || e.target.classList.contains(space_text[2])) {
    class_detail_img.classList.add("Space_2");
  }else {
    class_detail_img.classList.remove("Space_2");
  }
  if (e.target.contains(caption[3]) || e.target.classList.contains(space_text[3])) {
    class_detail_img.classList.add("Space_3");
  }else {
    class_detail_img.classList.remove("Space_3");
  }
  if (e.target.contains(caption[4]) || e.target.classList.contains(space_text[4])) {
    class_detail_img.classList.add("Space_4");
  }else {
    class_detail_img.classList.remove("Space_4");
  }
})