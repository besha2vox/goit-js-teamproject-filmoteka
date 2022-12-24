import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './utils/local-st-functions';

const tipStorage = {
    language: {
                "EN": "Switch to Ukrainian",
                "UA": "Перейти на Англійську"
            },

    theme: {
                "EN": {"dark":"Switch to Light", "light":"Switch to Dark"},
                "UA": {"dark":"Змінити тему на Cвітлу", "light":"Змінити тему на Темну"},
            },
}

let tip = document.createElement("div"); 
tip.className = "tooltip";               
tip.hidden = true;                       
document.body.append(tip);               

document.addEventListener("mouseover", showTip);
document.addEventListener("mouseout", hideTip)

function showTip(event) {
    let tar = event.target.closest("[data-tooltip]");
    if (!tar) return;

    let currentTheme = loadDataFromLocalSt("theme");
    let currentLang = loadDataFromLocalSt("language");
    
    if (tar.dataset.tooltip === "language-switch") {
        if (currentLang !== undefined) {
            tip.innerHTML = tipStorage.language[currentLang];
        } else {
            tip.innerHTML = tipStorage.language["UA"];
        }
    }
    
    if (tar.dataset.tooltip === "theme-switch") {
        if (currentTheme !== undefined) {
            tip.innerHTML = tipStorage.theme[currentLang][currentTheme];
        } else {
            tip.innerHTML = tipStorage.theme["UA"]["light"];
        }
    }
    tip.hidden = false;

    let tarRect = tar.getBoundingClientRect(); 
    let x, y;                                  
    
    x = tarRect.x + tar.offsetWidth / 2 - tip.offsetWidth / 2;
    if (x < 0) x = 0;                          
    
    y = tarRect.y - tip.offsetHeight - 5;      
    if (y < 0) y = tarRect.y + tar.offsetHeight + 5; 

    tip.style.left = x + "px";                 
    tip.style.top = y + "px";                 
}

function hideTip() {
    tip.hidden = true;
}
