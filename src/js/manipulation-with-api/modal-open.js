import { API } from '../api';
import { Modal } from '../class-modal';
import { getModalMarkup } from '../modal';

const modal = new Modal();
const api = new API();

export async function onMovieClick(e) {
  const article = e.target.closest('.movie-card');
  console.log('article', article.id);
  if (!article) return;

  const movie = await api.getSearchMoviesByID(article.id);

  const markup = await getModalMarkup(movie);
  modal.open(markup);

  // renderTrailer(article.id);
}
