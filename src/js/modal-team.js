import teamOfList from './data-team';
import { Modal } from './class-modal';

const modal = new Modal();

const refs = {
  teamBtns: document.querySelectorAll('.page-footer__action-btn'),
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
                // вставка текста англ 
            } else { 
                // вставка текста укр 
            } 
        } else { 
           // вставка текста укр 
        }