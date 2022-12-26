export function createPagination(totalPages, currentPage) {
  if (totalPages < 2) return `<li></li>`;
  let liTag = '';
  let active;
  let plength = 0;
  let page = currentPage;
  let beforePage = page - 2;
  let afterPage = page + 2;
  if (page > 1) {
    liTag += `<li class="btn prev")"><button>
    <svg class="pag-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6666 8H3.33325" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button></li>`;
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
    liTag += `<li class="btn next"><button>
    <svg class="pag-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33341 8H12.6667" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button></li>`;
  }

  return liTag;
}
