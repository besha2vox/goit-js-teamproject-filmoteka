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


   <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img class="team-img" src="${photo}" alt="${name}" width="300">
                    
                    <p class="team-name">${name}</p>
                    <p class="team-position">${position}</p>
                </div>
                <a href="${git}" class="team-link"></a>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
 `
    )
    .join('');
};

export const markupTeamCards = data => {
  const markup = `<h2 class="team-heading">Team "IT Kotiki"</h2>
  <ul class="team-list">${teamCardTpl(data)}</ul>`;
  modal.open(markup);
};

refs.teamBtns.forEach(btn => btn.addEventListener('click', markupTeamCards));


{/* <li class="team-item" id="universe">
      <img class="team-img" src="${photo}" alt="${name}" width="100">
      <a href="${git}" class="team-link"></a>
    <div class="team-desc-container" >
        <p class="team-name">${name}</p>
        <p class="team-position">${position}</p>
    </div>
</li> */}
