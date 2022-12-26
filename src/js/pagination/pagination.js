import { element, getRefs } from './refs';
import { createPagination } from './pagination-template';
import { scrollOnClick } from './scroll';

let api = {};
let fetchCurrentPage = () => {};

export function renderPagination(totalPages, func, fetchApi) {
  fetchCurrentPage = func;
  api = fetchApi;
  element.innerHTML = createPagination(totalPages, api.pageToFetch);
  const btnRefs = getRefs(element);
  addListenersBtns(btnRefs);
}

function onPrevBtnClick(e) {
  api.decrementPage();
  fetchCurrentPage();
  scrollOnClick();
}

async function onNextBtnClick(e) {
  api.incrementPage();
  fetchCurrentPage();
  scrollOnClick();
}

function onNumberedBtnClick(e) {
  api.pageToFetch = Number(e.target.dataset.num);
  fetchCurrentPage();
  scrollOnClick();
}

function addListenersBtns({ prevBtn, numberedBtns, nextBtn }) {
  if (prevBtn) prevBtn.addEventListener('click', onPrevBtnClick);
  if (nextBtn) nextBtn.addEventListener('click', onNextBtnClick);
  numberedBtns.forEach(btn =>
    btn.addEventListener('click', onNumberedBtnClick)
  );
}
