const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('click', event => {
    icon.classList.toggle('open');
  });
});

const iconMenu = document.querySelector('.nav-icon-mob');
if (iconMenu) {
  const menu = document.querySelector('.utils__wrapper');
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menu.classList.toggle('_active');
  });
}

// let menu = document.querySelector('.utils-mob');
// icons.addEventListener('click', function(){
//     menu.classList.toggle('active');
// })
