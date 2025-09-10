// Select all the 'li' elements that act as tabs
const tabItems = document.querySelectorAll('div [role="row-items"]');
const videobtn = document.querySelectorAll("#video-btn");
tabItems.forEach((tab) => {
  tab.addEventListener("click", () => {
    const isOpen = tab.classList.contains("open");

    tabItems.forEach((item) => {
      item.classList.remove("open");
    });
    if (!isOpen) {
      tab.classList.add("open");
    }
  });
});

function modalShows() {
  document.getElementById("modal-ios").classList.toggle("hidden");
  document.getElementById("back-modal").classList.toggle("invisible");
  document.body.classList.add("overflow-hidden");
}

function modalclose() {
  document.getElementById("modal-ios").classList.add("hidden");
  document.getElementById("back-modal").classList.add("invisible");
  document.body.classList.remove("overflow-hidden");
}

function playvideo(item) {
  document.getElementById(item).controls = "controls";
  document.getElementById(item).play();
}

videobtn.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.add("hidden");
  });
});

function mobileVideo() {
  document.getElementById("video-mobile").classList.toggle("hidden");
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 350) {
    document
      .getElementById("nav-bar")
      .classList.add("bg-black", "bg-opacity-8", "backdrop-blur-md");
    document.getElementById("nav-bar").classList.remove("bg-transparent");
    document.getElementById("overlay-item").classList.remove("hidden");
    document.getElementById("nav-item").classList.remove("hidden");
  } else {
    document
      .getElementById("nav-bar")
      .classList.remove("bg-black", "bg-opacity-85", "backdrop-blur-md");
    document.getElementById("nav-bar").classList.add("bg-transparent");
    document.getElementById("overlay-item").classList.add("hidden");
    document.getElementById("nav-item").classList.add("hidden");
  }
});

document.getElementById("menu-btn").addEventListener("click", () => {
  document.body.classList.toggle("open-modal");
});

document.getElementById("close-menu").addEventListener("click", () => {
  document.body.classList.remove("open-modal");
});
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach(() => {
      document.body.classList.remove("open-modal");
    });
  });
});
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach(() => {
      document.body.classList.remove("open-modal");
    });
  });
});
const circleWay = document.querySelectorAll(".circle-way");

circleWay.forEach((item) => {
  item.addEventListener("click", () => {
    switch (Number(item.attributes.tabindex.value)) {
      case 0:
        document.getElementById("img-way").src = imageUrl[0];
        document.getElementById("circle-description").textContent = textWay[0];
        document.getElementById("title-way").textContent = titleWay[0];
        circleWay[2].classList.remove("active");
        circleWay[1].classList.remove("active");
        circleWay[0].classList.add("active");
        break;

      case 1:
        document.getElementById("img-way").src = imageUrl[1];
        document.getElementById("circle-description").textContent = textWay[1];
        document.getElementById("title-way").textContent = titleWay[1];
        circleWay[2].classList.remove("active");
        circleWay[0].classList.add("active");
        circleWay[1].classList.add("active");

        break;

      case 2:
        document.getElementById("img-way").src = imageUrl[2];
        document.getElementById("circle-description").textContent = textWay[2];
        document.getElementById("title-way").textContent = titleWay[2];
        circleWay[0].classList.add("active");
        circleWay[1].classList.add("active");
        circleWay[2].classList.add("active");
        break;
    }
  });
});

const imageUrl = {
  0: "./src/images/road-hami/way-1.png",
  1: "./src/images/road-hami/way-2.png",
  2: "./src/images/road-hami/way-3.png",
};
const textWay = {
  0: "ورود به سامانه ایزی تریدر/ افتتاح حساب در کارگزاری مفید",
  1: "با واریز وجه در سامانه ایزی‌تریدر خود میتوانید در صندوق حامی سرمایه‌گذاری کنید.",
  2: "طی گذشت دو روز کاری و راکد ماندن مبلغ در قدرت خرید سامانه ایزی‌ترید به صورت خودکار سود حامی را روز شمار محاسبه میکند.",
};
const titleWay = {
  0: "گام اول",
  1: "گام دوم",
  2: "گام سوم",
};
