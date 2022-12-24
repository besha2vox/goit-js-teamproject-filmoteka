// скрол догори//

window.onload = () => {
  window.onscroll = function (e) {
    let winY = window.scrollY;
    if (winY > 300) {
      ProgressBar();
      scrollbarAnimation();
      winY = null;
    }
  };
  const scrollBtn = document.querySelector('.isShowBtn')
  window.onscroll = () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('isHiden');
    } else {
      scrollBtn.classList.add('isHiden');
    }
  }

  scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

};


// Лоадер//

let mask = document.querySelector('.loader');

window.addEventListener('load', () => {
    mask.classList.add('hide');
  setTimeout(() => {
        mask.remove()
    }, 400)
});


