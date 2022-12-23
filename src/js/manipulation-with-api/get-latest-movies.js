import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';
import { renderPagination } from '../utils/pagination';
import { createGenreData } from './get-genres';

const api = new API();

const moviesList = document.querySelector('.movies-grid__list');
const pagination = document.querySelector('.pagination-list');

moviesList.addEventListener('click', onMovieClick);

// getLatestMovies();

async function getLatestMovies() {
  const movies = await createMovieData();
  const genres = await createGenreData();
  const getPromise = movies.results.map(movie =>
    createMovieCardMarkup(movie, genres.genres)
  );
  const template = (await Promise.all(getPromise)).join('');

  moviesList.innerHTML = template;
  renderPagination(movies.total_pages, pagination, getLatestMovies, api);
}

async function createMovieData() {
  try {
    return await api.getTrendingMovies('day');
  } catch (error) {
    console.log(error.message);
  }
}

export { getLatestMovies, moviesList, pagination };
