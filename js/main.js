// Header 스크롤 시 header 색상 변경
window.onscroll = () => {
  const nav = document.querySelector('#header-scroll');
  if(this.scrollY <= 650) nav.className = ''; else nav.className = 'scroll';
};


// 메뉴 호버 시 header 색상 변경
  const gnbItems = document.querySelectorAll(".gnb > li");
  const headerWrap = document.querySelector(".header-wrap");
  const navSubMenu = document.querySelectorAll("nav, .sub-menu");
  
  gnbItems.forEach(item => {
    item.addEventListener("mouseover", function() {
      headerWrap.style.backgroundColor = "white";
    });
  });
  
  navSubMenu.forEach(item => {
    item.addEventListener("mouseout", function() {
      headerWrap.style.backgroundColor = "transparent";
    });
  });


// Scroll Magic
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감지할 요소를 지정
    triggerHook: 0.8, // 시간
  })
  // show를 넣었다 뺐다가
  // .setClassToggle(토글할요소, '넣었다 뺄 class이름')
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


// Swiper Slider
const swiperOne = new Swiper(".model-swiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  loopedSlides: 2,
  loopAdditionalSlides : 1,
  fadeEffect: { crossFade: true },
  loop: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: true,
  },
});

const swiperTwo = new Swiper('.prod-swiper .swiper', {
  // Optional parameters
  direction: 'horizontal', //슬라이드방향 horizontal, vertical
  loop: true, // 슬라이드 반복 여부
  loopedSlides: 2,
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
//   autoplay: {     //자동슬라이드 (false-비활성화)
//      delay: 5000, // 시간 설정
//      disableOnInteraction: false, // false-스와이프 후 자동 재생
// },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
  },

  // Navigation arrows
  navigation: { //좌우버튼
    nextEl: '.swiper-button-next',  //버튼을 담을 태그 설정
    prevEl: '.swiper-button-prev',  //버튼을 담을 태그 설정
  },
});

swiperOne.controller.control = swiperTwo;
swiperTwo.controller.control = swiperOne;


// To-top Button
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function() {
  if(window.scrollY > 500) {
    // 탑 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    })
  } else {
    // 탑 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function() { // top버튼을 클릭하면 상단으로 이동
  gsap.to(window, 0.4, {
    scrollTo: 0
  })
});