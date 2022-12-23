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

export async function createMovieCardMarkup({
  genre_ids,
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}) {
  const genre = await searchGenres(genre_ids);

  return await `<li class="movie-card" id="${id}">
        <img 
        src="https://image.tmdb.org/t/p/original${poster_path}" 
        alt="Poster of ${title}" class="movie-card__img" />
        
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
              <p class="movie-card__genre">${genre} | ${
    release_date.split('-')[0]
  }</p>
              <span class="movie-card__rating">${vote_average.toFixed(1)}</span>
              </div>
          </div>
      </li>`;
}
