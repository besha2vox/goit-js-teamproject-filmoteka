import { loadDataFromLocalSt } from './utils/local-st-functions';
import { GENRES_STORAGE_KEY } from './manipulation-with-api/get-genres';
import { fakePoster } from './utils/fake-poster';

export function searchGenres(ids) {
  const allGenres = JSON.parse(loadDataFromLocalSt(GENRES_STORAGE_KEY));
  const genresArr = ids.map(id => allGenres.find(genre => genre.id === id));

  return genresArr
    .map(({ name }) => name)
    .slice(0, 3)
    .join(', ');
}

export async function createMovieCardMarkup({
  genre_ids,
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  genres,
}) {
  const genre = await getGenres(genre_ids, genres);

  const url = `https://image.tmdb.org/t/p/original${poster_path}`;
  const poster = poster_path ? url : fakePoster;

  if (genre.length < 1 && release_date) {
    return await `<li class="movie-card" id="${id}">
    <img src=${poster} 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap">
              <span class="movie-card__release">${
                release_date.split('-')[0]
              }</span></p>
              </div>
          </div>
      </li>`;
  } else if (!release_date && genre.length > 0) {
    return await `<li class="movie-card" id="${id}">
    <img src=${poster} 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap">
              <span class="movie-card__genre">${genre}</span></p>
              </div>
          </div>
      </li>`;
  } else if (genre.length < 1 && !release_date) {
    return await `<li class="movie-card" id="${id}">
    <img src=${poster} 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap"></p>
              </div>
          </div>
      </li>`;
  } else {
    return await `<li class="movie-card" id="${id}">
    <img src=${poster} 
        alt="Poster of ${title}" class="movie-card__img" />
          <div class="movie-card__info">
            <p class="movie-card__name">${title}</p>
            <div class="movie-card__wrap">
            <p class="movie-card__info-wrap">
              <span class="movie-card__genre">${genre}</span> | <span class="movie-card__release">${
      release_date.split('-')[0]
    }</span></p>
              </div>
          </div>
      </li>`;
  }
}

async function getGenres(genreIds, genres) {
  if (genreIds) return await searchGenres(genreIds);

  return await genres
    .map(genre => genre.name)
    .slice(0, 3)
    .join(', ');
}
