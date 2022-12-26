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
import { renderTrailer } from '../trailer';
import { searchTrailer } from '../trailer';

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

  const markup = await getModalMarkup(movie);
  modal.open(markup);

  // searchTrailer(article.id);
}

function filmModalOptions() {
  const filmModal = document.querySelector('.modal-movie');
  const addToWatchedBtn = filmModal.querySelector('[data-list="watched"]');
  const addToQueuedBtn = filmModal.querySelector('[data-list="queue"]');
  const btnList = filmModal.querySelector('.buttons-list__film-modal');
  const notifyEl = filmModal.querySelector('.modal-movie__notify');
  const filmId = addToWatchedBtn.closest('[data-id]').dataset.id;
  const poop = document.querySelector('.movie-poop');
  if (poop) {
    poop.addEventListener('click', async () => {
      const poopClose = document.querySelector('.poop-close');
      await searchTrailer(filmId).then(result => {
        document
          .querySelector('.backdrop')
          .insertAdjacentHTML('beforeend', result);
      });
      poopClose.style.display = 'block';
      const poopBackdrop = document.querySelector('.backdrop-iframe');
      poopBackdrop.addEventListener('click', e => {
        if (e.target === poopBackdrop) {
          poopBackdrop.remove();
          poopClose.remove();
        }
      });
    });
  }

  checkDB(filmId);
  // poopBtn.addEventListener('click', renderTrailer);
  addToWatchedBtn.addEventListener('click', onWotchedBtnClick);
  addToQueuedBtn.addEventListener('click', onQueueBtnClick);

  async function onWotchedBtnClick(event) {
    if (!loadDataFromLocalSt(KEY)) {
      loginFormNotify(
        notifyEl,
        'Please register or log in to your account to be able to add movies to playlists.'
      );
      return;
    }

    if (!event.target.classList.value.includes('button__header--active')) {
      classToggle(event.target, 'add', 'button__header--active');
      event.target.textContent = 'in watched list';

      addFilmToTheList(filmId, event.target.dataset.list);
      loginFormNotify(notifyEl, 'The movie has been added to your watch list!');
    } else {
      classToggle(event.target, 'remove', 'button__header--active');
      event.target.textContent = 'add to watched';

      deleteFilmFromList(filmId, 'watched');
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
        'Please register or log in to your account to be able to add movies to playlists.'
      );
      return;
    }

    if (!event.target.classList.value.includes('button__header--active')) {
      classToggle(event.target, 'add', 'button__header--active');
      event.target.textContent = 'in queue list';

      addFilmToTheList(filmId, event.target.dataset.list);
      loginFormNotify(notifyEl, 'The movie has been added to your Queue list!');
    } else {
      classToggle(event.target, 'remove', 'button__header--active');
      event.target.textContent = 'add to queue';

      deleteFilmFromList(filmId, 'queue');
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

    const watchedData = await getUserDataFromDB('watched');
    const queueData = await getUserDataFromDB('queue');

    if (Object.keys(watchedData).includes(String(filmId))) {
      classToggle(addToWatchedBtn, 'add', 'button__header--active');
      addToWatchedBtn.textContent = 'in watched list';
    }

    if (Object.keys(queueData).includes(String(filmId))) {
      classToggle(addToQueuedBtn, 'add', 'button__header--active');
      addToQueuedBtn.textContent = 'in queue list';
    }

    btnList.style.display = 'flex';
  }
}

export { onMovieClick, modalOptions, modal, api, onPoopClick };
