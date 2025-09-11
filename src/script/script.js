
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 300) {
    document.body.classList.add("Discovered");
  } else {
    document.body.classList.remove("Discovered");
  }
});


const circleWay = document.querySelectorAll(".circle-way");

circleWay.forEach((item) => {
  item.addEventListener("click", () => {
    switch (Number(item.attributes.tabindex.value)) {
      case 0:
        circleWay[2].classList.remove("active");
        circleWay[1].classList.remove("active");
        circleWay[3].classList.remove("active");

        circleWay[0].classList.add("active");
        break;

      case 1:
        circleWay[0].classList.remove("active");
        circleWay[2].classList.remove("active");
        circleWay[3].classList.remove("active");

        circleWay[1].classList.add("active");

        break;

      case 2:
        circleWay[0].classList.remove("active");
        circleWay[1].classList.remove("active");
        circleWay[3].classList.remove("active");
        circleWay[2].classList.add("active");
        break;
      case 3:
        circleWay[0].classList.remove("active");
        circleWay[1].classList.remove("active");
        circleWay[2].classList.remove("active");
        circleWay[3].classList.add("active");
        break;
    }
  });
});


const slider = document.getElementById("mySlider");
const slides = slider.querySelectorAll(".circle-way");
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}
function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);
setInterval(nextSlide, 5000);
