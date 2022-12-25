import { API } from './api';
import { Modal } from './class-modal';
import { searchGenres } from './create-movie-card';
import { slider } from './firebase-auth/auth-refs';
import { loadDataFromLocalSt } from './utils/local-st-functions';

const api = new API();
const modalUpcoming = new Modal();
const sliderContainer = document.querySelector('.trending-list');

// Рендер фильмов, которые скоро покажут в кинотеатрах
renderUpcoming();
async function renderUpcoming() {
  const upcoming = await api.getUpcomingMovies();
  const markup = upcoming.results
    .map(upcomin => {
      return `<li class="trending-card">
        <div class="img-div" data-genre="${upcomin.genre_ids}" data-ortitle="${upcomin.original_title}" data-popularity="${upcomin.popularity}" data-count="${upcomin.vote_count}" data-title="${upcomin.title}" data-overview="${upcomin.overview}" data-poster="https://image.tmdb.org/t/p/original/${upcomin.poster_path}" data-alt="${upcomin.original_title}" data-vote="${upcomin.vote_average}" data-relise="${upcomin.release_date}">
        <div><img  class="img-trend" src="https://image.tmdb.org/t/p/original/${upcomin.poster_path}" alt=""></div>
        <div class="info-trend">
        <div class="relise-date">Relise: ${upcomin.release_date}</div>
        </div>
        </div>
      </li>`;
    })

    .join('');
  sliderContainer.innerHTML = markup;
}

const modalClic = document.querySelector('.trending-list');
modalClic.addEventListener('click', renderModalTemplete);

function renderModalTemplete(e) {
  if (!e.target.closest('li')) {
    return;
  }
  const parrent = e.target.closest('.img-div');
  const genreIds = parrent.dataset.genre.split(',').map(genre => Number(genre));
  const genres = searchGenres(genreIds);

  const markup = `<div class="cartUpcomingModal">
  <div class="imgUpcomingModal"><img src="${parrent.dataset.poster}" alt="${parrent.dataset.alt}" class="poster"></div>
  <div class="infoUpcomingModal">
  <h2 class="titleUpcomingModal">${parrent.dataset.title}</h2>
  <ul class="listUpcomingModal list">
  <li class="itemUpcomingModal">
  <p class="keyUpcomingModal">Vote / Votes</p>
  <p class="valueUpcomingModal">
  <span class="valueUpcomingModal--accent">${parrent.dataset.vote}</span> / 
  <span class="valueUpcomingModal--uppercase">${parrent.dataset.count}</span>
  </p>
  </li>

  <li class="itemUpcomingModal">
  <p class="keyUpcomingModal">Popularity</p>
  <p class="valueUpcomingModal">${parrent.dataset.popularity}</p>
  </li>

  <li class="itemUpcomingModal">
  <p class="keyUpcomingModal">Original Title</p>
  <p class="valueUpcomingModal">${parrent.dataset.ortitle}</p>
  </li>
  
  <li class="itemUpcomingModal">
  <p class="keyUpcomingModal">Relise</p>
  <p class="valueUpcomingModal">${parrent.dataset.relise}</p>
  </li>

  <li class="itemUpcomingModal">
  <p class="keyUpcomingModal">Genre</p>
  <p class="valueUpcomingModal">${genres}</p>
  </li>
  </ul>

  <div class="wrapperAbout">
  <p class="aboutMovie">About</p>
  <p class="movieOverview">${parrent.dataset.overview}</p>
  </div>

</div>
  </div>
 `;

  const article = e.target.closest('.trending-card');

  if (!article) return;

  modalUpcoming.open(markup);
}

function checkPageForSlider() {
  const currentPageOnRefresh = loadDataFromLocalSt('page');
  if (currentPageOnRefresh === 'library') slider.style.display = 'none';
}

checkPageForSlider();
