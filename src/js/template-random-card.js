import { imgForRandom } from './utils/fake-poster';
import { loadDataFromLocalSt } from './utils/local-st-functions';
import { moviesList } from './firebase-auth/auth-refs';
import { getModalMarkup } from './modal';
import { modal } from './manipulation-with-api/modal-open';

async function createRandomCard() {
  const isUcrainian = loadDataFromLocalSt('language') === 'UA';
  const template = `<div class="js-random-card">
${imgForRandom}
<div class="movie-card__info">
<p  class="movie-card__name">${
    isUcrainian ? 'Тисни на картку!' : 'Click on the card!'
  }</p>
<p class="movie-card__info-wrap">${
    isUcrainian ? 'Отримай рандомний фільм!' : 'Get a random movie!'
  }</p>
  </div>
</div>`;

  moviesList.insertAdjacentHTML('beforeend', template);
  const randomCard = document.querySelector('.js-random-card');

  randomCard.addEventListener('click', onRandomClick);
}

async function onRandomClick() {
  const num = random();
  const films = await fetchRandomFilm(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=9cca312caffd11f4ae9f11244d585025&page=${random()}`
  );
  const filmsIds = films.results.map(film => film.id);

  let lang = '';
  const isUcrainian = loadDataFromLocalSt('language') === 'UA';
  if (isUcrainian) lang = 'uk-UK';
  else lang = 'en-US';

  const filmId = filmsIds[num];
  const film = await fetchRandomFilm(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=9cca312caffd11f4ae9f11244d585025&language=${lang}`
  );
  const template = await getModalMarkup(film);
  modal.open(template);
}

function random() {
  return Math.floor(Math.random() * 20) + 1;
}

async function fetchRandomFilm(url) {
  return await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log('error', error);
    });
}

export { createRandomCard };
