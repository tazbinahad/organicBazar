// document.addEventListener('DOMContentLoaded', function (event) {
//   console.log('DOM Is Ready for manipulation');
// });

// -----------------------------------------
// Click event functions
// SideBar toggle
function Toggle() {
  const sideBarMenu = document.getElementById('sideBar');
  const toggleBtn = document.getElementById('toggleBtn');
  const Main = document.getElementById('main');
  const Footer = document.getElementById('footer');
  sideBarMenu.classList.toggle('sideBarToggle');
  Main.classList.toggle('sideBarToggle');
  Footer.classList.toggle('sideBarToggle');
}
// Open Floating Cart
function openCart() {
  const floatingCart = document.getElementById('floatingCart');
  let hasClass = floatingCart.classList.contains('closed');
  if (hasClass) {
    floatingCart.classList.remove('closed');
    floatingCart.classList.add('open');
  }
}
// Close Floating Cart
function closeCart() {
  const floatingCart = document.getElementById('floatingCart');
  let hasClass = floatingCart.classList.contains('open');
  if (hasClass) {
    floatingCart.classList.remove('open');
    floatingCart.classList.add('closed');
  }
}
// -------------------------------------------
// All Jquery Code
// Slick Script for:productSliderHome
jQuery(document).ready(function ($) {
  $('.productSliderHome').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:
      "<i class='SliderHomePrev icofont-curved-left a-left control-c prev slick-prev'></i>",
    // "<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
    nextArrow:
      // "<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>",
      "<i class='SliderHomeNext icofont-curved-right a-right control-c next slick-next'></i>",
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
