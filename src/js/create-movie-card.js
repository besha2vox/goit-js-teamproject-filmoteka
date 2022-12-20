import { refs } from './refs';

export default function createMovieCardMarkup(movies) {
  const markup = movies
    .map(movie => {
      return `<li class="movie-card">
        <img src="" alt="" class="movie-card__img" />
        <div class="movie-card__wrap">
          <div class="movie-card__info">
            <p class="movie-card__name">{movieName}</p>
            <p class="movie-card__genre">{movieGenre} | {year}</p>
          </div>
          <span class="movie-card__rating">{rating}</span>
        </div>
      </li>`;
    })
    .join('');

  refs.movieList.innerHTML += markup;
}
