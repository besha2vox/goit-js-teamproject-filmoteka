import { API } from '../api';
import { Modal } from '../class-modal';
import { getModalMarkup } from '../modal';
import { classToggle } from '../firebase-auth/interface-change';
import {
  addFilmToTheList,
  deleteFilmFromList,
  getUserDataFromDB,
} from '../firebase-database/database-realization';
import { loadDataFromLocalSt } from '../utils/local-st-functions';
import { loginFormNotify } from '../firebase-auth/interface-change';

const KEY = 'userUID';
const modalOptions = {
  onShow: filmModalOptions,
};
const modal = new Modal(modalOptions);
const api = new API();

async function onMovieClick(e) {
  const article = e.target.closest('.movie-card');
  if (!article) return;

  const movie = await api.getSearchMoviesByID(article.id);

  const markup = getModalMarkup(movie);
  modal.open(markup);
}

function filmModalOptions() {
  const filmModal = document.querySelector('.modal-movie');
  const addToWatchedBtn = filmModal.querySelector('[data-list="watched"]');
  const addToQueuedBtn = filmModal.querySelector('[data-list="queue"]');
  const btnList = filmModal.querySelector('.buttons-list__film-modal');
  const notifyEl = filmModal.querySelector('.modal-movie__notify');
  const filmId = addToWatchedBtn.closest('[data-id]').dataset.id;

  checkDB(filmId);

  addToWatchedBtn.addEventListener('click', onWotchedBtnClick);
  addToQueuedBtn.addEventListener('click', onQueueBtnClick);

  async function onWotchedBtnClick(event) {
    if (!loadDataFromLocalSt(KEY)) {
      loginFormNotify(
        notifyEl,
        'Please register or log in to your account to be able to add movies to your playlists.'
      );
      return;
    }

    if (!event.target.classList.value.includes('button__header--active')) {
      classToggle(event.target, 'add', 'button__header--active');
      event.target.textContent = 'in your watched list';

      addFilmToTheList(filmId, event.target.dataset.list);
      loginFormNotify(notifyEl, 'The movie has been added to your watch list!');
    } else {
      classToggle(event.target, 'remove', 'button__header--active');
      event.target.textContent = 'add to watched';

      deleteFilmFromList(filmId, event.target.dataset.list);
      loginFormNotify(
        notifyEl,
        'The movie has been removed from your Watched list!'
      );
    }
  }

  function onQueueBtnClick(event) {
    if (!loadDataFromLocalSt(KEY)) {
      loginFormNotify(
        notifyEl,
        'Please register or log in to your account to be able to add movies to your playlists.'
      );
      return;
    }

    if (!event.target.classList.value.includes('button__header--active')) {
      classToggle(event.target, 'add', 'button__header--active');
      event.target.textContent = 'in your queue list';

      addFilmToTheList(filmId, event.target.dataset.list);
      loginFormNotify(notifyEl, 'The movie has been added to your Queue list!');
    } else {
      classToggle(event.target, 'remove', 'button__header--active');
      event.target.textContent = 'add to queue';

      deleteFilmFromList(filmId, event.target.dataset.list);
      loginFormNotify(
        notifyEl,
        'The movie has been removed from your Queue list!'
      );
    }
  }

  async function checkDB(filmId) {
    if (!loadDataFromLocalSt(KEY)) {
      btnList.style.display = 'flex';
      return;
    }

    const userData = await getUserDataFromDB(loadDataFromLocalSt(KEY));

    if (userData['watched'].includes(filmId)) {
      classToggle(addToWatchedBtn, 'add', 'button__header--active');
      addToWatchedBtn.textContent = 'in your watched list';
    }

    if (userData['queue'].includes(filmId)) {
      classToggle(addToQueuedBtn, 'add', 'button__header--active');
      addToQueuedBtn.textContent = 'in your queue list';
    }

    btnList.style.display = 'flex';
  }
}

export { onMovieClick, modalOptions, modal, api };
