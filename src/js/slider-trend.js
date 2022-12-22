import { API } from './api';
const api = new API()
const sliderContainer = document.querySelector('.trending-list');


renderTrend()
async function renderTrend() {
  const trends = await api.getTrendingMovies('day');
  const markup =  trends.results.map(trend => {
    return `<li class="trending-card slide">
    <div><img  class="img-trend" src="https://image.tmdb.org/t/p/original${trend.poster_path}" alt=""></div>
    <div class="info-trend">
      <span class="vote-average-trend">${trend.vote_average}</span>
    </div>
  </li>`;
  })
  .join("");
  sliderContainer.innerHTML = markup
  }