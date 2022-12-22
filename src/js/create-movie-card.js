import { API } from './api';

const api = new API();

async function searchGenres(ids) {
  const genresObj = await api.getGenres();
  const genres = genresObj.genres;
  const genresArr = ids.map(id => genres.find(genre => genre.id === id));
  return genresArr
    .map(({ name }) => name)
    .slice(0, 2)
    .join(', ');
}

export async function createMovieCardMarkup(movie) {
  const genre = await searchGenres(movie.genre_ids);

  return `<li class="movie-card" id="${movie.id}">
        <img src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" alt="Poster of ${movie.title}" class="movie-card__img" />
        
          <div class="movie-card__info">
            <p class="movie-card__name">${movie.title}</p>
            <div class="movie-card__wrap">
              <p class="movie-card__genre">${genre} | ${
    movie.release_date.split('-')[0]
  }</p>
              <span class="movie-card__rating">${movie.vote_average.toFixed(
                1
              )}</span>
              </div>
          </div>
      </li>`;
}
