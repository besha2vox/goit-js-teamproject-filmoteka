let api = {};
let fetchCurrentPage = () => {};

export const element = document.querySelector('.pagination-list');

function createPagination(totalPages) {
  let liTag = '';
  let active;
  let plength = 0;
  let page = api.pageToFetch;
  let beforePage = page - 2;
  let afterPage = page + 2;
  if (page > 1 && totalPages > 5) {
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

export function renderPagination(totalPages, func, fetchApi) {
  fetchCurrentPage = func;
  api = fetchApi;
  element.innerHTML = createPagination(totalPages);
  const btnRefs = getRefs(element);
  addListenersBtns(btnRefs);
}

export function getRefs() {
  const prevBtn = element.querySelector('.btn.prev');
  const numberedBtns = element.querySelectorAll('.numb');
  const nextBtn = element.querySelector('.btn.next');

  return { prevBtn, numberedBtns, nextBtn };
}

function onPrevBtnClick(e) {
  api.decrementPage();
  fetchCurrentPage();
}

async function onNextBtnClick(e) {
  api.incrementPage();
  fetchCurrentPage();
}

function onNumberedBtnClick(e) {
  api.pageToFetch = Number(e.target.dataset.num);
  fetchCurrentPage();
}

function addListenersBtns({ prevBtn, numberedBtns, nextBtn }) {
  if (prevBtn) prevBtn.addEventListener('click', onPrevBtnClick);
  if (nextBtn) nextBtn.addEventListener('click', onNextBtnClick);
  numberedBtns.forEach(btn =>
    btn.addEventListener('click', onNumberedBtnClick)
  );
}
