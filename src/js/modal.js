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
  const genresNames = genres.map(genre => genre.name).join(', ');

  return `<div class="modal-movie">
  <img class="poster" width="375" src="${url}" alt="${title}" />
  <div class="modal-movie__descr">   
    
    <div class="modal-movie__info-weapper">
    <h2 class="modal-movie__title">${title}</h2>  
    <ul class="modal-movie__list list">
    <li class="modal-movie__item">
    <p class="modal-movie__key">Vote / Votes</p>
     <p class="modal-movie__value">
       <span class="modal-movie__value--accent">${vote_average}</span> / ${vote_count}
     </p>
    </li>
    <li class="modal-movie__item">
     <p class="modal-movie__key">Popularity</p>
     <p class="modal-movie__value">${popularity}</p>
    </li>
    <li class="modal-movie__item">
    <p class="modal-movie__key">Original Title</p>
     <p class="modal-movie__value modal-movie__value--uppercase">
     ${original_title}</p>
    </li>
    <li class="modal-movie__item">
    <p class="modal-movie__key">Genre</p>
     <p class="modal-movie__value">${genresNames}</p>
    </li>
    
    </ul>  
      <div class="modal-movie__about-wrapper">
      <p class="modal-movie__about">About</p>
      <p class="modal-movie__overview">${overview}</p>
      </div>
      
      <div class="trailer-wrapper"></div>
      <div class="modal-movie__button-wrapper">
        <button class="modal-movie__btn">add to Watched</button>
        <button class="modal-movie__btn">add to queue</button>
      </div>
    </div>
  </div>
</div>`;
};
