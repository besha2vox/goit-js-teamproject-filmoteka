import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';
import { renderPagination } from '../utils/pagination';

const api = new API();

const moviesList = document.querySelector('.movies-grid__list');
const pagination = document.querySelector('.pagination-list');

moviesList.addEventListener('click', onMovieClick);

// getLatestMovies();

async function getLatestMovies() {
  const movies = await createData();
  const getPromise = movies.results.map(createMovieCardMarkup);
  const template = (await Promise.all(getPromise)).join('');

  moviesList.innerHTML = template;
  renderPagination(movies.total_pages, pagination, getLatestMovies, api);
}

async function createData() {
  try {
    return await api.getMovieLatest('day');
  } catch (error) {
    console.log(error.message);
  }
}

export { getLatestMovies, moviesList, pagination };
