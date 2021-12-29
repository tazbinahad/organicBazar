// SideBar
const sideBarMenu = document.getElementById('sideBar');
const toggleBtn = document.getElementById('toggleBtn');
const Main = document.getElementById('main');
const Footer = document.getElementById('footer');
const closeFloatingCart = document.getElementsByClassName('cartLeftCloneBtn');
const closeCarts = document.getElementsByClassName('close-btn');
const floatingCart = document.getElementById('floatingCart');

function closeCart() {
  floatingCart.classList.add('closed');
}
toggleBtn.addEventListener('click', function () {
  sideBarMenu.classList.toggle('sideBarToggle');
  Main.classList.toggle('sideBarToggle');
  Footer.classList.toggle('sideBarToggle');
});
// Close floating cart
// closeFloatingCart.addEventListener('click', function () {
//   console.log('clicked');
// });

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
  });
});
