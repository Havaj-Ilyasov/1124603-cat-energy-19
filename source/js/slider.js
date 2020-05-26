var slideBefore = document.querySelector(".before-after__slide--before");
var slideAfter = document.querySelector(".before-after__slide--after");
var btnBefore = document.querySelector('.before-after__button--before');
var btnAfter = document.querySelector('.before-after__button--after');

btnBefore.addEventListener("click", function() {
  slideAfter.style.display = "none";
  slideBefore.style.display = "flex";
});

btnAfter.addEventListener("click", function() {
  slideBefore.style.display = "none";
  slideAfter.style.display = "flex";
});
