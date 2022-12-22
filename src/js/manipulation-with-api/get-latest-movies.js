import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';

const api = new API();

const moviesRef = document.querySelector('.movies-grid__list');

moviesRef.addEventListener('click', onMovieClick);

getLatestMovies();

async function getLatestMovies() {
  const movies = await createData();
  const getPromise = movies.results.map(createMovieCardMarkup);
  const template = await (await Promise.all(getPromise)).join('');

  moviesRef.innerHTML = template;
  // renderPagination(movies.total_pages, refs.pagination, getTranding, api);
}

async function createData() {
  try {
    return await api.getMovieLatest('week');
  } catch (error) {
    console.log(error.message);
  }
}
