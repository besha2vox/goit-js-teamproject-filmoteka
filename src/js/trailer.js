import { API } from './api';
const api = new API();

function trailerTemplate(trailer) {
  return `
  <div class='backdrop-iframe'>
  <div class="poobox">
      <iframe
              class="trailer" id="poop"

        src="https://www.youtube.com/embed/${trailer}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      </div>`;
}
// poop.addEventListener('click', )

export async function searchTrailer(id) {
  const trailers = await api.getMovieTreiler(id);

  if (!trailers || !trailers.results[0]) return '';

  const trailer = trailers.results.find(video => video.type === 'Trailer');
  // console.log(trailer)
  //
  // const element = document.querySelector('.poster-wrap');
  let template = trailerTemplate(trailer.key);
  // console.log(template)

  // console.log(poop)
  // console.log(element)
  // const poop = document.querySelector('.movie-poop');

  return template;
}

export async function checkTrailer(id) {
  const trailers = await api.getMovieTreiler(id);
  if (!trailers || !trailers.results[0]) return false;
  return true;
}
