const sideBarMenu = document.getElementById('sideBar');
const toggleBtn = document.getElementById('toggleBtn');
const Main = document.getElementById('main');

toggleBtn.addEventListener('click', function () {
  sideBarMenu.classList.toggle('sideBarToggle');
  Main.classList.toggle('sideBarToggle');
});
