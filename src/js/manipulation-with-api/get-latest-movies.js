import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';
import { renderPagination } from '../pagination/pagination';
import { getCurrentFunc } from '../utils/render-on switch-lang';

const api = new API();

const moviesList = document.querySelector('.movies-grid__list');

moviesList.addEventListener('click', onMovieClick);

// getLatestMovies();

async function getLatestMovies() {
  const movies = await createMovieData();
  const getPromise = movies.results.map(movie => createMovieCardMarkup(movie));
  const template = (await Promise.all(getPromise)).join('');

  moviesList.innerHTML = template;
  getCurrentFunc(getLatestMovies);
  renderPagination(movies.total_pages, getLatestMovies, api);
}

async function createMovieData() {
  try {
    return await api.getTrendingMovies('day');
  } catch (error) {
    console.log(error.message);
  }
}

export { getLatestMovies, moviesList, pagination };
