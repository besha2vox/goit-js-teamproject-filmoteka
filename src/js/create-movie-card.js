import { API } from './api';

const api = new API();

async function searchGenres(ids, genres) {
  const getPromise = ids.map(
    async id => await genres.find(genre => genre.id === id)
  );
  const genresArr = await Promise.all(getPromise);
  console.log('genresArr', genresArr);
  return genresArr
    .map(({ name }) => name)
    .slice(0, 3)
    .join(', ');
}

export async function createMovieCardMarkup(
  { genre_ids, id, title, poster_path, vote_average, release_date },
  genres
) {
  const genre = await searchGenres(genre_ids, genres);

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
