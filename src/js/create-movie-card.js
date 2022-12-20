import { refs } from './refs';
import { movieGenres } from './movies-genres';

export default function createMovieListMarkup(movies) {
  const markup = movies
    .map(movie => {
      return `<li class="movie-card">
        <img src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" alt="Poster of ${movie.original_title}" class="movie-card__img" />
        <div class="movie-card__wrap">
          <div class="movie-card__info">
            <p class="movie-card__name">${movie.original_title}</p>
            <p class="movie-card__genre">${movie.genre_ids.map(id => {
              return ` ${movieGenres[id]}`;
            })} | ${new Date(movie.release_date).getFullYear()}</p>
          </div>
          <span class="movie-card__rating">${movie.vote_average}</span>
        </div>
      </li>`;
    })
    .join('');

  refs.movieList.innerHTML += markup;
}
