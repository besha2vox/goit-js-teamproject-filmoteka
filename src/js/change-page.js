import {
  libraryLink,
  homeLink,
  libraryPage,
  homePage,
  watchedBtn,
  queueBtn,
  moviesList,
} from './firebase-auth/auth-refs';
import {
  classToggle,
  showElements,
  hideElements,
} from './firebase-auth/interface-change';
import { api } from './manipulation-with-api/modal-open';
import {
  getLatestMovies,
  resetApiPage,
} from './manipulation-with-api/get-latest-movies';
import { saveDataToLocalSt } from './utils/local-st-functions';
import {
  getUserDataFromDB,
  monitorsChangesInDB,
} from './firebase-database/database-realization';
import {
  calculateFilms,
  resetPagNums,
} from './pagination/pagination-my-librery';
import { getCurrentFunc } from './utils/render-on switch-lang';
import { async } from 'regenerator-runtime';

const PAGE_KEY = 'page';
const LIST_KEY = 'film-list';

libraryLink.addEventListener('click', onLibraryPage);
homeLink.addEventListener('click', onHomePage);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick(event) {
  if (event) {
    event.preventDefault();
    resetPagNums();
  }

  classToggle(watchedBtn, 'add', 'button__header--active');
  classToggle(queueBtn, 'remove', 'button__header--active');

  fetchWatched();

  saveDataToLocalSt(LIST_KEY, 'watched');

  monitorsChangesInDB('watched');
}

function onQueueBtnClick(event) {
  if (event) {
    event.preventDefault();
    resetPagNums();
  }

  classToggle(queueBtn, 'add', 'button__header--active');
  classToggle(watchedBtn, 'remove', 'button__header--active');

  fetchQueue();

  saveDataToLocalSt(LIST_KEY, 'queue');

  monitorsChangesInDB('queue');
}

async function onLibraryPage(event) {
  if (event) {
    event.preventDefault();
    resetPagNums();
  }

  libraryPageInterface();

  fetchLibrary();

  saveDataToLocalSt(PAGE_KEY, 'library');
  saveDataToLocalSt(LIST_KEY, 'watched');
}

//!----------------| for pagination |------------------------

async function fetchWatched() {
  getDataArray('watched', fetchWatched);
}

async function fetchQueue() {
  getDataArray('queue', fetchQueue);
}

async function fetchLibrary() {
  getDataArray('watched', fetchLibrary);
}

async function getDataArray(type, func) {
  const userData = await getUserDataFromDB(type);
  const idsArray = Object.keys(userData).slice(1, userData.length);
  const arrayIds = await calculateFilms(idsArray, func);
  getCurrentFunc(onWatchedBtnClick);
  renderFilmLists(arrayIds);
}

async function renderFilmLists(ids) {
  const getPromisesById = ids.map(async id => await createData(id));
  const getDataFromPromises = await Promise.all(getPromisesById);
  const template = getDataFromPromises.map(createMovieCardMarkup).join('');
  moviesList.innerHTML = template;
}
//!----------------| for pagination |------------------------

async function renderFilmListsFromDB(list) {
  const userData = await getUserDataFromDB(list);
  const filmsId = Object.keys(userData).slice(1, userData.length);

  // const currentIds = filmsId.filter(id => arrayIds.includes(id));
  const currentIds = await calculateFilms(filmsId);

  const getPromisesById = currentIds.map(async id => {
    return await createData(id);
  });
  const getDataFromPromises = await Promise.all(getPromisesById);
  const countOfPages = Math.ceil(getDataFromPromises.length / 9);
  const template = getDataFromPromises.map(createMovieCardMarkup).join('');

  moviesList.innerHTML = template;
}

function libraryPageInterface() {
  classToggle(libraryLink, 'add', 'active');
  classToggle(homeLink, 'remove', 'active');
  classToggle(watchedBtn, 'add', 'button__header--active');
  classToggle(queueBtn, 'remove', 'button__header--active');

  hideElements(homePage);
  showElements(libraryPage);

  renderFilmListsFromDB('watched');
}

function onHomePage(event) {
  event.preventDefault();

  saveDataToLocalSt(PAGE_KEY, 'home');

  classToggle(homeLink, 'add', 'active');
  classToggle(libraryLink, 'remove', 'active');

  hideElements(libraryPage);
  showElements(homePage);

  resetApiPage();
  getLatestMovies();
}

function homePageInterface() {
  classToggle(homeLink, 'add', 'active');
  classToggle(libraryLink, 'remove', 'active');

  hideElements(libraryPage);
  showElements(homePage);

  getLatestMovies();
}

async function createData(id) {
  try {
    return await api.getSearchMoviesByID(id);
  } catch (error) {
    console.log(error.message);
  }
}

function createMovieCardMarkup({
  genres,
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}) {
  const genresStr = searchGenres(genres);

  if (genres.length < 1) {
    return `<li class="movie-card" id="${id}">
    <img src="https://image.tmdb.org/t/p/original${poster_path}" 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap">
              <span class="movie-card__release">${
                release_date.split('-')[0]
              }</span></p>
              </div>
          </div>
      </li>`;
  } else if (!release_date) {
    return `<li class="movie-card" id="${id}">
    <img src="https://image.tmdb.org/t/p/original${poster_path}" 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap">
              <span class="movie-card__genre">${genresStr}</span></p>
              </div>
          </div>
      </li>`;
  } else if (genres.length < 1 && !release_date) {
    return `<li class="movie-card" id="${id}">
    <img src="https://image.tmdb.org/t/p/original${poster_path}" 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap"></p>
              </div>
          </div>
      </li>`;
  } else {
    return `<li class="movie-card" id="${id}">
    <img src="https://image.tmdb.org/t/p/original${poster_path}" 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap">
              <span class="movie-card__genre">${genresStr}</span> | <span class="movie-card__release">${
      release_date.split('-')[0]
    }</span></p>
              </div>
          </div>
      </li>`;
  }
}

function searchGenres(genres) {
  const genresArr = genres.map(genre => genre.name);
  return genresArr.slice(0, 3).join(', ');
}

async function renderFilmsFromDB(userData) {
  const getPromisesById = userData.map(async id => await createData(id));

  const getDataFromPromises = await Promise.all(getPromisesById);
  const countOfPages = Math.ceil(getDataFromPromises.length / 9);
  const template = getDataFromPromises.map(createMovieCardMarkup).join('');

  moviesList.innerHTML = template;
  // renderPagination(
  //   countOfPages,
  //   pagination,
  //   getUserDataFromDB(loadDataFromLocalSt(KEY)),
  //   api
  // );
}

export {
  homePageInterface,
  libraryPageInterface,
  renderFilmListsFromDB,
  renderFilmsFromDB,
  fetchWatched,
  fetchQueue,
};
