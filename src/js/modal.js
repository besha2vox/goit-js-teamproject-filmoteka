import { Modal } from './class-modal';

const modal = new Modal();

export const getModalMarkup = ({
  overview,
  vote_average,
  popularity,
  original_title,
  genres,
  poster_path,
  vote_count,
  title,
}) => {
  const url = `https://image.tmdb.org/t/p/original${poster_path}`;
  const genresNames = genres.map(genre => genre.name).join(' ');
  return `
              <img src="${url}" alt="film photo" class="modal-card-film-img">
              <div>
              <h2 class="modal-card__title">${title}</h2>
              <div class="modal-card-list-wrapper">
                <ul class="modal-list-info">
                  <li class="modal-card__item"><span class="modal-card__info">Vote / Votes</span>
                      <span class="modal-card__vote">${vote_average}</span>
                      <span class="modal-card__slash">/</span>
                      <span class="modal-card__value">${vote_count}</span>
                  </li>
                  <li class="modal-card__item"><span class="modal-card__info">Popularity</span><span
                      class="modal-card__value">${popularity}</span></li>
                  <li class="modal-card__item"><span class="modal-card__info">Original Title</span
                      class="modal-card__value">${original_title}<span></span></li>
                  <li class="modal-card__item"><span class="modal-card__info">Genre</span><span
                      class="modal-card__value">${genresNames.genre}</span></li>
                </ul>
              </div>
              <h3 class="modal-card-title-about">About</h3>
              <p class="modal-card-about-text">${overview}</p>
              <button class="modal-card-watched-btn" type="button">add to watched</button>
              <button type="button" class="modal-card-queue-btn">add to queue</button>
              </div>`;
};
