
import teamOfList from './data-team'; 
import { Modal } from './class-modal'; 
import { loadDataFromLocalSt } from './utils/local-st-functions';  
 
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
 
const teamCardTplUa = () => { 
  return teamOfList 
    .map( 
      ({ git, photo, nameUA, positionUA }) => 
        ` 
<li class="team-item"> 
      <img class="team-img" src="${photo}" alt="${nameUA}" width="100"> 
      <a href="${git}" class="team-link"></a> 
    <div class="team-desc-container"> 
        <p class="team-name">${nameUA}</p> 
        <p class="team-position">${positionUA}</p> 
    </div> 
</li> ` 
    ) 
    .join(''); 
}; 
 
export const markupTeamCards = data => { 
  let markup = ''; 
  const storageLanguage = loadDataFromLocalSt("language");  
  if (storageLanguage !== undefined) {  
    if (storageLanguage === "EN") {  
      markup = `<div class="wrapper"><h2 class="typing-team">Our team "IT Kotiki"</h2></div> 
      <ul class="team-list">${teamCardTpl()}</ul>`; 
    } else {  
      markup = `<div class="wrapper"><h2 class="typing-team"> Команда "IT Котики"</h2></div> 
      <ul class="team-list">${teamCardTplUa()}</ul>`; 
    }  
} else {  
        markup = `<div class="wrapper"><h2 class="typing-team">Команда "IT Котики"</h2></div> 
        <ul class="team-list">${teamCardTplUa()}</ul>`; 
        } 
  modal.open(markup); 
}; 
 
refs.teamBtns.forEach(btn => btn.addEventListener('click', markupTeamCards));