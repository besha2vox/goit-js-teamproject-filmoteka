const element = document.querySelector('.pagination-list');

function getRefs() {
  const prevBtn = element.querySelector('.btn.prev');
  const numberedBtns = element.querySelectorAll('.numb');
  const nextBtn = element.querySelector('.btn.next');

  return { prevBtn, numberedBtns, nextBtn };
}

export { element, getRefs };
