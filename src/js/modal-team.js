import teamOfList from './data-team';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import dataTeam from './data-team';

const refs = {
  teamBtn: document.querySelector('.page-footer__action-btn'),
  teamList: document.querySelector('.team-list'),
  lightboxBtn: document.querySelector('.lightbox-button'),
};

const modal = basicLightbox.create(document.querySelector('.lightbox'), {
  onShow: () => {
    document.body.classList.add('body-lightbox');
    window.addEventListener('keydown', onKeyPressEsc);
  },
  onClose: () => {
    document.body.classList.remove('body-lightbox');
    window.removeEventListener('keydown', onKeyPressEsc);
  },
});

const teamCardTpl = dataTeam => {
  return dataTeam
    .map(
      ({ git, photo, name, position }) =>
        `
<li class="team-item">
      <img class="team-img" src="${photo}" alt="${name}" width="100">
      <a href="${git}" class="team-link"></a>
    <div class="team-desc-container">
        <p class="team-name">${name}</p>
        <p class="team-position">${position}</p>
    </div>
</li> `
    )
    .join('');
};

const markupTeamCards = data => {
  const markup = teamCardTpl(data);
  refs.teamList.innerHTML = markup;
};

refs.teamBtn.addEventListener('click', modal.show);
console.log('markupTeamCards', markupTeamCards(teamOfList));
// console.log('teamOfList', teamOfList);

refs.lightboxBtn.addEventListener('click', modal.close);

function onKeyPressEsc(e) {
  if (e.code === 'Escape') {
    modal.close();
  }
}
