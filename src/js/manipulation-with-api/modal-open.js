import { API } from '../api';
import { Modal } from '../class-modal';

const api = new API();

export async function onMovieClick(e) {
  const article = e.target.closest('.movie-card');
  console.log('article', article.id);
  if (!article) return;

  const movie = await api.getSearchMoviesByID(article.id);
  console.log('movie', movie);

  // const markup = modalTemplate(movie);
  // modal.open(markup);

  // renderTrailer(article.id);
}
