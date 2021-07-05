// Slick Slider
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
  })
});

let theme_icon=document.querySelector(".btn4");
let logo=document.querySelector(".logo");
let abt_meal_img=document.querySelector(".abt_meal_img");
let root_change=document.querySelector(".root_change");

console.log(root_change);
console.log(theme_icon);
console.log(logo);
console.log(abt_meal_img);
theme_icon.addEventListener('click',()=>{
  console.log("object");
  document.body.classList.toggle('root_change');
  if(document.body.classList.contains("root_change")){
    logo.src="images/logodark.png";
    abt_meal_img.src="images/about_meal.jpg"
  }else{  
    logo.src="icons/logo.svg";
    abt_meal_img.src="images/about_meal.png"

  }

})