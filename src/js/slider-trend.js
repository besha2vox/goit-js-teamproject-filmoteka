import { API } from './api';
const api = new API()
const sliderContainer = document.querySelector('.trending-list');


// Рендер фильмов, которые скоро покажут в кинотеатрах
renderUpcoming()
async function renderUpcoming() {
  const upcoming = await api.getUpcomingMovies();
  const markup = upcoming.results.map(upcomin => {
        return `<li class="trending-card slide">
        <div class="img-div">
        <div><img  class="img-trend" src="https://image.tmdb.org/t/p/original${upcomin.poster_path}" alt=""></div>
        <div class="info-trend">
        <div class="relise-date">Relise: ${upcomin.release_date}</div>
        </div>
        </div>
      </li>`;
      })
      .join("");
      sliderContainer.innerHTML = markup
  console.log(upcoming)
}






// Рендер фильмов, которые сейчас смотрят
// renderNowPlaing()
// async function renderNowPlaing() {
//   const nowPlaing = await api.getNowPlaingMovies();
//   const markup = nowPlaing.results.map(nowPlay => {
//         return `<li class="trending-card slide">
//         <div><img  class="img-trend" src="https://image.tmdb.org/t/p/original${nowPlay.poster_path}" alt=""></div>
//         <div class="info-trend">
//           <span class="vote-average-trend">${nowPlay.vote_average}</span>
//         </div>
//       </li>`;
//       })
//       .join("");
//       sliderContainer.innerHTML = markup
//   console.log(nowPlaing)
// }


// Рендер фильмов по трендам
// renderTrend()
// async function renderTrend() {
//   const trends = await api.getTrendingMovies('day');
//   const markup =  trends.results.map(trend => {
//     return `<li class="trending-card slide">
//     <div><img  class="img-trend" src="https://image.tmdb.org/t/p/original${trend.poster_path}" alt=""></div>
//     <div class="info-trend">
//       <span class="vote-average-trend">${trend.vote_average}</span>
//     </div>
//   </li>`;
//   })
//   .join("");
//   sliderContainer.innerHTML = markup
//   }

