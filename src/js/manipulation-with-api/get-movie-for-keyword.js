import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';
import { renderPagination } from '../utils/pagination';

const api = new API();

const refs = {
  form: document.querySelector('.home__form'),
  moviesList: document.querySelector('.movies-grid__list'),
  pagination: document.querySelector('.pagination-list'),
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

  if (!movies) return;
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
  const getPromise = movies.results.map(createMovieCardMarkup);
  const template = (await Promise.all(getPromise)).join('');

  refs.moviesList.innerHTML = template;
  renderPagination(
    movies.total_pages,
    refs.pagination,
    getMoviesByKeyword,
    api
  );
}

async function getData() {
  try {
    return await api.getMovieLatest('week');
  } catch (error) {
    console.log(error.message);
  }
}
