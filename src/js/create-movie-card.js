import { loadDataFromLocalSt } from './utils/local-st-functions';
import { GENRES_STORAGE_KEY } from './manipulation-with-api/get-genres';

function searchGenres(ids) {
  const allGenres = JSON.parse(loadDataFromLocalSt(GENRES_STORAGE_KEY));
  console.log('allGenres', allGenres);
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
