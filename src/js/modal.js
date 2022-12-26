import { loadDataFromLocalSt } from './utils/local-st-functions';
import { fakePoster } from './utils/fake-poster';
import { checkTrailer } from './trailer';

export const getModalMarkup = async ({
  overview,
  vote_average,
  popularity,
  original_title,
  genres,
  poster_path,
  vote_count,
  title,
  id,
}) => {
  const url = `https://image.tmdb.org/t/p/original${poster_path}`;
  const genresNames = genres.map(genre => genre.name).join(', ');
  const isUkrainian = loadDataFromLocalSt('language') === 'UA';

  const nonAbout = isUkrainian
    ? 'На жаль, опис фільму відсутній.'
    : 'Unfortunately, there is no description of the film.';

  const nonGenre = isUkrainian
    ? 'На жаль, жанри відсутні.'
    : 'Unfortunately, there are no genres.';

  const poster = poster_path ? url : fakePoster;

  const isTrailerExist = await checkTrailer(id);
  const trailerIcon = isTrailerExist
    ? `
<div class="trailer-wrapper">
<a class="movie-poop">
<img class="youpoop" width="50" height="35" src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="poop" />
</a>
    </div>`
    : '';

  return `<div class="modal-movie" data-id='${id}'>
      <div class="poster-wrap">
     ${trailerIcon}
  <img class="poster" width="375" src=${poster} />
  </div>
  <div class="modal-movie__descr">   
    
    <div class="modal-movie__info-weapper">
    <h2 class="modal-movie__title">${title}</h2>  
    <ul class="modal-movie__list list">
    <li class="modal-movie__item">
    <p class="modal-movie__key">${
      isUkrainian ? 'Оцінка/Оцінок' : 'Vote / Votes'
    }</p>
     <p class="modal-movie__value">
       <span class="modal-movie__value--accent">${vote_average}</span> / ${vote_count}
     </p>
    </li>
    <li class="modal-movie__item">
     <p class="modal-movie__key">${
       isUkrainian ? 'Популярність' : 'Popularity'
     }</p>
     <p class="modal-movie__value">${popularity}</p>
    </li>
    <li class="modal-movie__item">
    <p class="modal-movie__key">${
      isUkrainian ? 'Офіційна назва' : 'Original Title'
    }</p>
     <p class="modal-movie__value modal-movie__value--uppercase">
     ${original_title}</p>
    </li>
    <li class="modal-movie__item">
    <p class="modal-movie__key">${isUkrainian ? 'Жанр' : 'Genre'}</p>
     <p class="modal-movie__value">${
       genresNames.length > 1 ? genresNames : nonGenre
     }</p>
    </li>
    
    </ul>  
      <div class="modal-movie__about-wrapper">
      <p class="modal-movie__about">${isUkrainian ? 'Опис' : 'About'}</p>
      <p class="modal-movie__overview">${overview ? overview : nonAbout}</p>
      </div>
      
      
       <ul class="buttons-list buttons-list__film-modal">
     <li class="buttons-list__item">
         <button class="button button--transparent" type="button" data-list="watched"  data-id=${id}>
             add to Watched
         </button>
     </li>
     <li class="buttons-list__item">
         <button class="button button--transparent" type="button" data-list="queue"  data-id=${id}>
             add to queue
         </button>
     </li>
     <li class="buttons-list__item">
   </li>
     </ul>
     <p class='modal-movie__notify form__error-notification--for-header'></p>
    </div>
  </div>
</div>`;
};
//  <a class="button button--transparent film__trailer__btn" href="#">
//        <i class="fa-brands fa-youtube fa-3x"></i>
//        <p class="film__trailer__text">watch trailer</p>
//  </a>
