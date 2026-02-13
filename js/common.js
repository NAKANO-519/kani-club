





const menuBtn = document.querySelector(".menu-btn");
const menuList =document.querySelector(".menu-list");
const body = document.body;
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("active");
  header.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

const menuLinks = document.querySelectorAll('.menu-list a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
    header.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

// スクロールすると、トップへボタン表示

const pageTop = document.querySelector('.gotop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // 300pxスクロールしたら
    pageTop.classList.add('is-show');
  } else {
    pageTop.classList.remove('is-show');
  }
});