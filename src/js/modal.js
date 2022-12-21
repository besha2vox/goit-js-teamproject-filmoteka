const itemCardEl = document.querySelector('.movie-card');

const getModalMarkup = ({ movie_title, movie_description, movie_vote, movie_popularity, movie_original_title, movie_genre, movie_img, movie_votes }) => `<div class="card-modal" data-modal>
            <button type="button" class="card-modal-close-btn" data-modal-close>
              <svg class="card-modal-close" width="30" height="30">
                <use></use>
              </svg>
            </button>
            <div class="modal-card-wrapper">
              <img src="${movie_img}" alt="film photo" class="modal-card-film-img">
              <div>
                <h2 class="modal-film-title">${movie_title}</h2>
                <div class="modal-card-list-wrapper">
                  <ul class="modal-list-info">
                    <li class="modal-info-item">Vote / Votes</li>
                    <li class="modal-info-item">Popularity</li>
                    <li class="modal-info-item">Original Title</li>
                    <li class="modal-info-item">Genre</li>
                  </ul>
                  <ul class="modal-card-answers-list">
                    <li class="modal-card-list-item"><span class="modal-card-vote">${movie_vote}</span><span class="modal-vote-slash">/</span>${movie_votes}</li>
                    <li class="modal-card-list-item">${movie_popularity}</li>
                    <li class="modal-card-list-item">${movie_original_title}</li>
                    <li class="modal-card-list-item">${movie_genre}</li>
                  </ul>
                </div>
                <h3 class="modal-card-title-about">About</h3>
                <p class="modal-card-about-text">${movie_description}</p>
                <button class="modal-card-watched-btn" type="button">add to watched</button>
                <button type="button" class="modal-card-queue-btn">add to queue</button>
              </div>
            </div>
          </div>`;

const markup = apiList.map(item => getModalMarkup(item));

const renderModal = () => {
    itemCardEl.insertAdjacentHTML('beforeend', markup.join(''))
}

// Openmodal

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.movie-card'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelectorAll('[data-modal]'),
  };
  refs.openModalBtn.forEach(function (li) {
    li.addEventListener('click', toggleModal);
  })
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    refs.modal.forEach(function (modalEl) {
      modalEl.classList.toggle('is-hidden');
    })
    document.body.classList.toggle('no-scroll')
  }
})();


