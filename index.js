//pop up 
var div=document.getElementById("div")
var x=document.getElementById("x")
x.addEventListener("click",function(){
    div.remove()
})
// side nav
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

  menuicon.addEventListener("click",function(){
    sidenav.style.left=0
  })


  closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
  })



  
var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderImageContainer = document.querySelector(".slider-image-container");
var slideCount = sliderImageContainer.children.length; // Number of images
var slideWidth = 100; // Assuming each slide takes 100vw
var currentSlide = 0;

sliderRightButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slideCount; // Loop back to the first slide
    sliderImageContainer.style.marginLeft = `-${currentSlide * slideWidth}vw`;
});

sliderLeftButton.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount; // Loop back to the last slide
    sliderImageContainer.style.marginLeft = `-${currentSlide * slideWidth}vw`;
});
