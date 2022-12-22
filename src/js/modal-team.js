import teamOfList from './data-team';
import { Modal } from './class-modal';

const modal = new Modal();

const refs = {
  teamBtn: document.querySelector('.page-footer__action-btn'),
};

const teamCardTpl = () => {
  return teamOfList
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

export const markupTeamCards = data => {
  const markup = `<h2 class="team-heading">Team "IT Kotiki"</h2>
  <ul class="team-list">${teamCardTpl(data)}</ul>`;
  modal.open(markup);
};

refs.teamBtn.addEventListener('click', markupTeamCards);
