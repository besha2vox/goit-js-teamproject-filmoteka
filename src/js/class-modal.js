export class Modal {
  constructor(onShow = () => {}, onClose = () => {}) {
    this.onShow = onShow;
    this.onClose = onClose;
    this.backdrop = null;
  }

  open(markup) {
    const template = modalTemplate(markup);
    document.body.insertAdjacentHTML('beforeend', template);
    document.body.classList.add('modal-open');
    this.backdrop = document.querySelector('.backdrop');
    this.closeIcon = document.querySelector('.modal__close');

    this.backdrop.addEventListener('click', this.onbackDropClose);
    this.closeIcon.addEventListener('click', this.onCloseClick);
    window.addEventListener('keyup', this.onEscClose);

    this.onShow();
  }

  close() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
    document.body.classList.remove('modal-open');

    this.backdrop.removeEventListener('click', this.onbackDropClose);
    this.closeIcon.removeEventListener('click', this.onCloseClick);
    window.removeEventListener('keyup', this.onEscClose);

    this.onClose();
  }

  onbackDropClose = e => {
    if (!e.target.classList.contains('backdrop')) return;
    this.close();
  };

  onCloseClick = e => {
    this.close();
  };

  onEscClose = e => {
    if (e.code !== 'Escape') return;
    this.close();
  };
}

function modalTemplate(markup) {
  console.log('markup', markup);
  const sadCat =
    '<img src="https://media.istockphoto.com/id/1018127028/vector/sorry.jpg?s=612x612&w=0&k=20&c=Ghc4Qgtbg1V-dreFXiGGT5haoq3Cwo6Kw6qpv2ibwRg=" />';
  const html = markup ? markup : sadCat;
  return `<div class="backdrop">
    <div class="modal">
    <button type="button" class="modal__close">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L22 22" stroke="black" stroke-width="2"/>
    <path d="M8 22L22 8" stroke="black" stroke-width="2"/>
    </svg>
    </button>
    ${html}
    </div>
    </div>`;
}
