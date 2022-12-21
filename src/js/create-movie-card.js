import { refs } from './refs';
import { movieGenres } from './movies-genres';

export default function createMovieCardMarkup(movies) {
  debugger;
  const markup = movies
    .map(movie => {
      return `<li class="movie-card" id="${movie.id}">
        <img src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" alt="Poster of ${movie.original_title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${movie.original_title}</p>
            <div class="movie-card__wrap">
              <p class="movie-card__genre">${movie.genre_ids.map(id => {
                return ` ${movieGenres[id]}`;
              })} | ${movie.release_date.split('-')[0]}</p>
              <span class="movie-card__rating">${movie.vote_average.toFixed(
                1
              )}</span>
            </div>
          </div>
      </li>`;
    })
    .join('');

  console.log(markup);

  refs.movieList.innerHTML += markup;
}
