import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { API } from './api';
const api = new API();

function trailerTemplate(trailer) {
    return `
      <iframe
              class="trailer"

        src="https://www.youtube.com/embed/${trailer}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
}

async function searchTrailer(id) {
    const trailers = await api.getMovieTreiler(id);

    if (!trailers || !trailers.results[0]) return '';

    const trailer = trailers.results.find(video => video.type === 'Trailer');
    console.log(trailer.key);
    return trailerTemplate(trailer.key);
    
}

export async function renderTrailer(id) {
    const element = document.querySelector('.trailer-wrapper');
    const template = await searchTrailer(id);

    element.innerHTML = template;
}



// export function onYoutubeBtnClick() {
//     let idBtn = document.querySelector('.button--transparent');

//     api.movieId = idBtn.dataset.id;

//     api
//         .fetchYoutube()
//         .then(data => {
//             let results = data.results[0];
//             // console.log(results);
//             let key = results.key;
//             return key;
//         })
//         .then(key => iframeRender(key));
// }

export function iframeRender(trailer) {
    const BASE_YOUTUBE_URL = `https://www.youtube.com/embed/${trailer}`;
    const instance = basicLightbox.create(
        `<button type="button" id="youtube-close-btn"><i class="fa-regular fa-circle-xmark"></i></button>
        <iframe src="${BASE_YOUTUBE_URL}?"autoplay=1&mute=1&controls=1 style="z-index: 999">
        </iframe>
        `,
        {
            onShow: instance => {
                instance.element().querySelector('#youtube-close-btn').onclick = instance.close;
                // const modal = document.querySelector('.backdrop');
                // modal.setAttribute('style', 'display:none');
                // const box = document.querySelector('.basiclightbox');
                // box.setAttribute('style', 'z-index: 1000');
                
            },
        },
    );
    instance.show();
}
