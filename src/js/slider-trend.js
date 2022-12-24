import { API } from './api';
import { Modal } from './class-modal';
const api = new API();
const modalUpcoming = new Modal();
const sliderContainer = document.querySelector('.trending-list');

// Рендер фильмов, которые скоро покажут в кинотеатрах
renderUpcoming();
async function renderUpcoming() {
  const upcoming = await api.getUpcomingMovies();
  const markup = upcoming.results
    .map(upcomin => {
      return `<li class="trending-card movie-card">
        <div class="img-div" data-title="${upcomin.title}" data-overview="${upcomin.overview}" data-poster="https://image.tmdb.org/t/p/original/${upcomin.poster_path}" data-alt="${upcomin.original_title}" data-vote="${upcomin.vote_average}" data-relise="${upcomin.release_date}">
        <div><img  class="img-trend" src="https://image.tmdb.org/t/p/original/${upcomin.poster_path}" alt=""></div>
        <div class="info-trend">
        <div class="relise-date">Relise: ${upcomin.release_date}</div>
        </div>
        </div>
      </li>`;
    })
    .join('');
  sliderContainer.innerHTML = markup;

  console.log(upcoming);
}

const modalClic = document.querySelector('.trending-list');
modalClic.addEventListener('click', renderModalTemplete);
console.log(modalClic);

function renderModalTemplete(e) {
 
  if (!e.target.closest('li')) {
    return;
  }
  const parrent = e.target.closest('.img-div');
  const markup = `<div class="cartUpcomingModal">
  <div class="imgUpcomingModal"><img src="${parrent.dataset.poster}" alt="${parrent.dataset.alt}"></div>
  <div class="infoUpcomingModal">
  <h2 class="img-poster">${parrent.dataset.title}</h2>
  <ul class="modal-movie__list list">
  <li class="modal-movie__item">
  <p class="modal-movie__value">Vote: ${parrent.dataset.vote}</p></li>
  <li class="modal-movie__item"><p class="modal-movie__value">Relise: ${parrent.dataset.relise}</p></li>
  </ul>
  <div>
  <p>About</p>
  <p>${parrent.dataset.overview}</p>
  </div>

</div>
  </div>
 `;

  const article = e.target.closest('.trending-card');

  if (!article) return;

  modalUpcoming.open(markup);
}
