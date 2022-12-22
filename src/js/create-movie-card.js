import { API } from './api';

const api = new API();

const film = {
  id: 123,
  poster_path:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1YzjkPs-O7Y0KdoXsv6ab0&ust=1671732711651000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOi2reWni_wCFQAAAAAdAAAAABAE',
  title: 'Cat wars',
  release_date: '2022-08-09',
  vote_average: 7.0876,
  genre_ids: [28, 12, 16],
};

export default function createMovieCardMarkup(movie) {
  async function searchGenres(ids) {
    const genres = await api.getGenres();
    const genresArr = ids.map(id => genres.find(genre => genre.id === id));
    const genresNames = genresArr
      .map(({ name }) => name)
      .slice(0, 2)
      .join(',');
  }
  debugger;

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

console.log(createMovieCardMarkup(film));
