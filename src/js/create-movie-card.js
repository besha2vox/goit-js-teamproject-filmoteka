import { API } from './api';

const api = new API();

export default function createMovieCardMarkup(movie) {
  async function searchGenres(ids) {
    const genres = await api.getGenres();
    const genresArr = ids.map(id => genres.find(genre => genre.id === id));
    const genresNames = genresArr
      .map(({ name }) => name)
      .slice(0, 2)
      .join(',');
  }

  return `<li class="movie-card" id="${movie.id}">
        <img src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" alt="Poster of ${movie.title}" class="movie-card__img" />
        <div class="movie-card__wrap">
          <div class="movie-card__info">
            <p class="movie-card__name">${movie.title}</p>
              <p class="movie-card__genre">${searchGenres(movie.genre_ids)} | ${
    movie.release_date.split('-')[0]
  }</p>
              </div>
              <span class="movie-card__rating">${movie.vote_average.toFixed(
                1
              )}</span>
          </div>
      </li>`;
}
