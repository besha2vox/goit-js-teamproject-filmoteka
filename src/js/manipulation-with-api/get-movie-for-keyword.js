import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';

const api = new API();

const refs = {
  form: document.querySelector('.home__form'),
  moviesList: document.querySelector('.movies-grid__list'),
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
  const getPromise = movies.results.map(createMovieCardMarkup);
  const template = await (await Promise.all(getPromise)).join('');

  refs.moviesList.innerHTML = template;
}

async function createData() {
  try {
    return await api.getMoviesByKeyWord();
  } catch (error) {
    console.log(error.message);
  }
}
