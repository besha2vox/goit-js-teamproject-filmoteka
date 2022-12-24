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
import { getLatestMovies } from './manipulation-with-api/get-latest-movies';
import {
  saveDataToLocalSt,
  loadDataFromLocalSt,
} from './utils/local-st-functions';
import {
  getUserDataFromDB,
  monitorsChangesInDB,
} from './firebase-database/database-realization';
import {
  calculateFilms,
  resetPagNums,
} from './pagination/pagination-my-librery';
import { getCurrentFunc } from './utils/render-on switch-lang';

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

  renderFilmListsFromDB('watched', onWatchedBtnClick);

  // fetchWatched();
  fetchLibrary(onWatchedBtnClick);

  saveDataToLocalSt(LIST_KEY, 'watched');

  monitorsChangesInDB('watched');
}

//!----------------| for pagination |------------------------
// async function fetchWatched() {
//   // libraryPageInterface();
//   const userData = await getUserDataFromDB('watched');
//   const idsArray = Object.keys(userData).slice(1, userData.length);
//   const filmsList = await calculateFilms(idsArray, onWatchedBtnClick);
//   getCurrentFunc(onQueueBtnClick);
//   renderFilmListsFromDB('watched');
// }
//!----------------| for pagination |------------------------

function onQueueBtnClick(event) {
  if (event) {
    event.preventDefault();
    resetPagNums();
  }

  classToggle(queueBtn, 'add', 'button__header--active');
  classToggle(watchedBtn, 'remove', 'button__header--active');

  renderFilmListsFromDB('queue');
  // fetchQueue();
  fetchLibrary(onQueueBtnClick);

  saveDataToLocalSt(LIST_KEY, 'queue');

  monitorsChangesInDB('queue');
}

//!----------------| for pagination |------------------------
// async function fetchQueue() {
//   // libraryPageInterface();
//   const userData = await getUserDataFromDB('queue');
//   const idsArray = Object.keys(userData).slice(1, userData.length);
//   const filmsList = await calculateFilms(idsArray, fetchLibrary);
//   getCurrentFunc(onQueueBtnClick);
//   renderFilmListsFromDB('queue');
// }
//!----------------| for pagination |------------------------

async function onLibraryPage(event) {
  if (event) {
    event.preventDefault();
    resetPagNums();
  }

  // monitorsChangesInDB();

  libraryPageInterface();

  renderFilmListsFromDB('watched');
  fetchLibrary(onLibraryPage);

  saveDataToLocalSt(PAGE_KEY, 'library');
  saveDataToLocalSt(LIST_KEY, 'watched');
}

// //!----------------| for pagination |------------------------
async function fetchLibrary(func) {
  libraryPageInterface();
  const userData = await getUserDataFromDB('watched');
  const idsArray = Object.keys(userData).slice(1, userData.length);
  const filmsList = await calculateFilms(idsArray, func);
  getCurrentFunc(func);
  renderFilmListsFromDB('watched');
}
//!----------------| for pagination |------------------------

async function renderFilmListsFromDB(list) {
  const userData = await getUserDataFromDB(list);
  const filmsId = Object.keys(userData).slice(1, userData.length);
  const getPromisesById = filmsId.map(async id => await createData(id));
  const getDataFromPromises = await Promise.all(getPromisesById);
  // const countOfPages = Math.ceil(getDataFromPromises.length / 9);
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

  return `<li class="movie-card" id="${id}">
        <img 
        src="https://image.tmdb.org/t/p/original${poster_path}" 
        alt="Poster of ${title}" class="movie-card__img" />
        
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
              <p class="movie-card__genre">${genresStr} | ${
    release_date.split('-')[0]
  }</p>
              <span class="movie-card__rating">${vote_average.toFixed(1)}</span>
              </div>
          </div>
      </li>`;
}

function searchGenres(genres) {
  const genresArr = genres.map(genre => genre.name);
  return genresArr.join(', ');
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
};
