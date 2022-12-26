import { element, getRefs } from './refs';
import { createPagination } from './pagination-template';
import { scrollOnClick } from './scroll';

const BREAKPOINTS = {
  DASKTOP: 1280,
  TABLET: 768,
  MOBILE: 480,
};

const FILMS_COUNT = {
  DASKTOP: 9,
  TABLET: 8,
  MOBILE: 4,
};

const pagNums = {
  start: 0,
  end: null,
  count: null,
  page: 1,
};

let getCurrentPage = () => {};

resetPagNums();

export async function calculateFilms(filmsList, func) {
  if (func) getCurrentPage = func;
  const pageCount = Math.ceil(filmsList.length / pagNums.count);
  const partOfFilms = filmsList.slice(pagNums.start, pagNums.end);
  renderMyLibPagination(pageCount);
  return partOfFilms;
}

function checkViewportWidth() {
  const screenWidth = window.screen.width;

  if (screenWidth >= BREAKPOINTS.DASKTOP) {
    pagNums.count = pagNums.end = FILMS_COUNT.DASKTOP;
    return;
  }

  if (screenWidth >= BREAKPOINTS.TABLET && screenWidth <= BREAKPOINTS.DASKTOP) {
    pagNums.count = pagNums.end = FILMS_COUNT.TABLET;
    return;
  }

  if (screenWidth <= BREAKPOINTS.TABLET) {
    pagNums.count = pagNums.end = FILMS_COUNT.MOBILE;
    return;
  }
}

export function resetPagNums() {
  pagNums.start = 0;
  pagNums.page = 1;
  checkViewportWidth();
}

function renderMyLibPagination(totalPages) {
  element.innerHTML = createPagination(totalPages, pagNums.page);
  const btnRefs = getRefs(element);
  addListenersMyLibBtns(btnRefs);
}

function addListenersMyLibBtns({ prevBtn, numberedBtns, nextBtn }) {
  if (prevBtn) prevBtn.addEventListener('click', onMyLibPrevBtnClick);
  if (nextBtn) nextBtn.addEventListener('click', onMyLibNextBtnClick);
  numberedBtns.forEach(btn =>
    btn.addEventListener('click', onMyLibNumberedBtnClick)
  );
}

function onMyLibPrevBtnClick(e) {
  scrollOnClick();
  prevPage();
}

export function prevPage() {
  pagNums.page -= 1;
  setSliceIndxs();
  getCurrentPage();
}

function onMyLibNextBtnClick(e) {
  scrollOnClick();
  pagNums.page += 1;
  setSliceIndxs();
  getCurrentPage();
}

function onMyLibNumberedBtnClick(e) {
  scrollOnClick();
  pagNums.page = Number(e.target.dataset.num);

  setSliceIndxs();
  getCurrentPage();
}

function setSliceIndxs() {
  const multiplier = pagNums.page - 1;
  pagNums.start = multiplier * pagNums.count;
  pagNums.end = pagNums.start + pagNums.count;
}
