import teamOfList from './data-team';
import { Modal } from './class-modal';

const modal = new Modal();

const refs = {
  teamBtns: document.querySelectorAll('.page-footer__action-btn'),
};

const teamCardTpl = () => {
  return teamOfList
    .map(
      ({ git, photo, name, position,nameUA,positionUA }) =>
        `
<li class="team-item">
      <img class="team-img" src="${photo}" alt="${name}" width="100">
      <a href="${git}" class="team-link" target="_blank"></a>
    <div class="team-desc-container">
        <p class="team-name EN">${name}</p>
        <p class="team-name UA">${nameUA}</p>
        <p class="team-position EN">${position}</p>
        <p class="team-position UA">${positionUA}</p>
    </div>
</li> `
    )
    .join('');
};

export const markupTeamCards = data => {
  const markup = `<div class="wrapper">
    <div class="typing-demo">
      These are our KOTIKI.
    </div>
</div>
  <ul class="team-list">${teamCardTpl(data)}</ul>`;
  modal.open(markup);
};


refs.teamBtns.forEach(btn => btn.addEventListener('click', markupTeamCards));

import { loadDataFromLocalSt } from './utils/local-st-functions'; const storageLanguage = loadDataFromLocalSt("language"); 
        if (storageLanguage !== undefined) { 
            if (storageLanguage === "EN") { 
                '${name}'
            } else { 
                '${nameUA}'
            } 
        } else { 
          '${nameUA}'
        }