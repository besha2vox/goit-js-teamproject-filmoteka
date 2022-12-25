export const getModalMarkup = ({
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

  return `<div class="modal-movie" data-id='${id}'>
      <div class="poster-wrap">
      <div class="trailer-wrapper">
      <a class="movie-poop">
      <img class="youpoop" width="50" height="35" src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="eat my poop" />
      </a>
          </div>
  <img class="poster" width="375" src="${url}" alt="${title}" />
  </div>
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