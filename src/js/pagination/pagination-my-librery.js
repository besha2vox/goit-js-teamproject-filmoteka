import { element, getRefs } from './pagination';

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
  getCurrentPage = func;
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
  element.innerHTML = createMyLibPagination(totalPages);
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
  pagNums.page -= 1;
  setSliceIndxs();
  getCurrentPage();
  console.log('pagNums.page', pagNums.page);
}

function onMyLibNextBtnClick(e) {
  pagNums.page += 1;
  setSliceIndxs();
  getCurrentPage();
  console.log('pagNums.page', pagNums.page);
}

function onMyLibNumberedBtnClick(e) {
  pagNums.page = Number(e.target.dataset.num);
  console.log('page', page);

  setSliceIndxs();
  getCurrentPage();
  console.log('pagNums.page', pagNums.page);
}

function setSliceIndxs() {
  const multiplier = pagNums.page - 1;
  pagNums.start = multiplier * pagNums.count;
  pagNums.end = pagNums.start + pagNums.count;
}

//? pag template

function createMyLibPagination(totalPages) {
  let liTag = '';
  let active;
  let plength = 0;
  let page = pagNums.page;
  let beforePage = page - 2;
  let afterPage = page + 2;
  if (page > 1) {
    liTag += `<li class="btn prev")"><button><</button></li>`;
  }

  if (page > 3 && totalPages > 5) {
    liTag += `<li class="first numb" data-num="1" ><button>1</button></li>`;

    if (page > 4 && totalPages > 5) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page === totalPages && beforePage - 2 > 0) {
    beforePage = beforePage - 2;
  } else if (page === totalPages - 1 && beforePage - 1 > 0) {
    beforePage = beforePage - 1;
  }
  if (page === 1) {
    afterPage = afterPage + 2;
    beforePage = 0;
  } else if (page === 2) {
    afterPage = afterPage + 1;
  }

  for (plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength === 0) {
      plength = plength + 1;
    }
    if (page === plength) {
      active = 'active';
    } else {
      active = '';
    }
    liTag += `<li class="numb ${active}" data-num=${plength} ><button>${plength}</button></li>`;
  }

  if (page < totalPages - 2 && totalPages > 5) {
    if (page < totalPages - 3 && totalPages > 5) {
      liTag += `<li class="dots"><button>...</button></li>`;
    }
    liTag += `<li class="last numb" data-num=${totalPages} ><button>${totalPages}</button></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next"><button>></button></li>`;
  }

  return liTag;
}