import {
  libraryLink,
  homeLink,
  libraryPage,
  homePage,
  watchedBtn,
  queueBtn,
  moviesList,
  logo,
  slider,
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
  onMyLibPrevBtnClick,
} from './pagination/pagination-my-librery';
import { createMovieCardMarkup } from './create-movie-card';
import { getCurrentFunc } from './utils/render-on switch-lang';
import { fakePoster } from './utils/fake-poster';
import { async } from 'regenerator-runtime';

const PAGE_KEY = 'page';
const LIST_KEY = 'film-list';

libraryLink.addEventListener('click', onLibraryPage);
homeLink.addEventListener('click', onHomePage);
logo.addEventListener('click', onHomePage);
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

  slider.style.display = 'none';

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
  const template = await getDataFromPromises.map(
    async movie => await createMovieCardMarkup(movie)
  );
  const templatePromise = (await Promise.all(template)).join('');
  moviesList.innerHTML = await templatePromise;
}
//!----------------| for pagination |------------------------

async function renderFilmListsFromDB(list) {
  const userData = await getUserDataFromDB(list);
  const filmsId = Object.keys(userData).slice(1, userData.length);

  // const currentIds = filmsId.filter(id => arrayIds.includes(id));
  const currentIds = await calculateFilms(filmsId);
  if (currentIds.length < 1) {
    onMyLibPrevBtnClick();
    return;
  }

  const getPromisesById = currentIds.map(async id => {
    return await createData(id);
  });
  const getDataFromPromises = await Promise.all(getPromisesById);
  // const countOfPages = Math.ceil(getDataFromPromises.length / 9);
  const template = await getDataFromPromises.map(
    async movie => await createMovieCardMarkup(movie)
  );
  const templatePromise = (await Promise.all(template)).join('');
  moviesList.innerHTML = await templatePromise;
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

  slider.style.display = 'block';
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
