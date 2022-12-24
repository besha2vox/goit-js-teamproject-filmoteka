import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';
import { renderPagination } from '../pagination/pagination';
import { loginFormNotify } from '../firebase-auth/interface-change';
import { getCurrentFunc } from '../utils/render-on switch-lang';

const api = new API();

const refs = {
  form: document.querySelector('.home__form'),
  moviesList: document.querySelector('.movies-grid__list'),
  notifyEl: document.querySelector('.form__error-notification--for-header'),
};

refs.moviesList.addEventListener('click', onMovieClick);
refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const query = e.target.query.value;
  if (query === api.queryToFetch && api.pageToFetch === 1) return;

  refs.moviesList.innerHTML = '';

  api.queryToFetch = query;
  api.pageToFetch = 1;

  const movies = await createData();

  if (!movies || !movies.results.length) {
    document.querySelector('.pagination-list').innerHTML = '';
    loginFormNotify(
      refs.notifyEl,
      'Search result not successful. Enter the correct movie name and'
    );
    return;
  }

  getMoviesByKeyword();
}

async function createData() {
  try {
    return await api.getMoviesByKeyWord();
  } catch (error) {
    console.log(error.message);
  }
}

async function getMoviesByKeyword() {
  const movies = await getData();
  const getPromise = movies.results.map(movie => createMovieCardMarkup(movie));
  const template = (await Promise.all(getPromise)).join('');

  refs.moviesList.innerHTML = template;
  getCurrentFunc(getMoviesByKeyword);
  renderPagination(movies.total_pages, getMoviesByKeyword, api);
}

async function getData() {
  try {
    return await api.getMoviesByKeyWord('week');
  } catch (error) {
    console.log(error.message);
  }
}
