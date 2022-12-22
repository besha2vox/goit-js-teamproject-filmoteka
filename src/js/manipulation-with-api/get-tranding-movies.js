import { createMovieCardMarkup } from '../create-movie-card';
import { API } from '../api';

const api = new API();

const moviesRef = document.querySelector('.movies-grid__list');

export async function getTranding() {
  const movies = await api.getMovieLatest('week');
  const template = movies.results
    .map(async movie => {
      const oneMovieTempl = await createMovieCardMarkup(movie);
      console.log('oneMovieTempl', oneMovieTempl);
      return await oneMovieTempl;
    })
    .join('');
  return await template;
  //   renderPagination(movies.total_pages, refs.pagination, getTranding, api);
}

export async function render() {
  const template = await getTranding();
  moviesRef.innerHTML = template;
  console.log('moviesRef', moviesRef);
}

render();
