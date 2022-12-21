import { Modal } from './js/class-modal';

const itemCardEl = document.querySelector('.movie-card');

const modal = new Modal(option);

const getModalMarkup = ({ overview, vote_average, popularity, original_title, genres, poster_path, vote_count }) => `
            <div class="modal-card-wrapper">
              <img src="${poster_path}" alt="film photo" class="modal-card-film-img">
              <div>
                <h2 class="modal-film-title">${original_title}</h2>
                <div class="modal-card-list-wrapper">
                  <ul class="modal-list-info">
                    <li class="modal-info-item">Vote / Votes</li>
                    <li class="modal-info-item">Popularity</li>
                    <li class="modal-info-item">Original Title</li>
                    <li class="modal-info-item">Genre</li>
                  </ul>
                  <ul class="modal-card-answers-list">
                    <li class="modal-card-list-item"><span class="modal-card-vote">${vote_average}</span><span class="modal-vote-slash">/</span>${vote_count}</li>
                    <li class="modal-card-list-item">${popularity}</li>
                    <li class="modal-card-list-item">${original_title}</li>
                    <li class="modal-card-list-item">${genres}</li>
                  </ul>
                </div>
                <h3 class="modal-card-title-about">About</h3>
                <p class="modal-card-about-text">${overview}</p>
                <button class="modal-card-watched-btn" type="button">add to watched</button>
                <button type="button" class="modal-card-queue-btn">add to queue</button>
              </div>
            </div>`;


modal.open(getModalMarkup());