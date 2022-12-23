import {
  libraryLink,
  homeLink,
  libraryPage,
  homePage,
  watchedBtn,
  queueBtn,
} from './firebase-auth/auth-refs';
import {
  classToggle,
  showElements,
  hideElements,
} from './firebase-auth/interface-change';
import {
  onMovieClick,
  modalOptions,
  modal,
  api,
} from './manipulation-with-api/modal-open';
import {
  getLatestMovies,
  moviesList,
  pagination,
} from './manipulation-with-api/get-latest-movies';
import { getUserDataFromDB } from './firebase-database/database-realization';
import { loadDataFromLocalSt } from './utils/local-st-functions';
import { renderPagination } from './utils/pagination';

const KEY = 'uaerUID';

libraryLink.addEventListener('click', onLibraryPage);
homeLink.addEventListener('click', onHomePage);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick(event) {
  event.preventDefault();

  classToggle(watchedBtn, 'add', 'button__header--active');
  classToggle(queueBtn, 'remove', 'button__header--active');
}

function onQueueBtnClick(event) {
  event.preventDefault();

  classToggle(queueBtn, 'add', 'button__header--active');
  classToggle(watchedBtn, 'remove', 'button__header--active');
}

async function onLibraryPage(event) {
  event.preventDefault();

  classToggle(libraryLink, 'add', 'active');
  classToggle(homeLink, 'remove', 'active');
  classToggle(watchedBtn, 'add', 'button__header--active');
  classToggle(queueBtn, 'remove', 'button__header--active');

  hideElements(homePage);
  showElements(libraryPage);

  const userData = await getUserDataFromDB(loadDataFromLocalSt(KEY));

  const getPromisesById = userData.watched.map(
    async id => await createData(id)
  );
  const getDataFromPromises = await Promise.all(getPromisesById);
  const countOfPages = Math.ceil(getDataFromPromises.length / 9);

  console.log(getDataFromPromises.map(createMovieCardMarkup));

  const template = getDataFromPromises.map(createMovieCardMarkup).join('');

  moviesList.innerHTML = template;
  renderPagination(
    countOfPages,
    pagination,
    getUserDataFromDB(loadDataFromLocalSt(KEY)),
    api
  );
}

function onHomePage(event) {
  event.preventDefault();

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
  console.log(genres);
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
  console.log(genres);
  const genresArr = genres.map(genre => genre.name);
  return genresArr.join(', ');
}
