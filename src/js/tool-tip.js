import { refs, changeTheme } from "/src/js/switcher_theme";
import { refs, changeLanguage } from "/src/js/switcher_language";

// Ф-ции localStorage:

function saveDataToLocalSt(key, value) {
    try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
} catch (error) {
    console.error('Set state error: ', error.message);
}
}

function loadDataFromLocalSt(key) {
try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
} catch (error) {
    console.error('Get state error: ', error.message);
}
}

function removeDataFromLocalSt(key) {
try {
    localStorage.removeItem(key);
} catch (error) {
    console.error('Get state error: ', error.message);
}
}

export { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt };



// Підказки

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
document.addEventListener("mouseout", hideTip);

function showTip(event) {
    let tar = event.target.closest("[data-tooltip]");
    if (!tar) return;

    let currentTheme = loadDataFromLocalSt("theme");
    let currentLang = loadDataFromLocalSt("language");
    
    if (tar.dataset.tooltip === "language-switch") {
        tip.innerHTML = tipStorage.language[currentLang];
    } 
    
    if (tar.dataset.tooltip === "theme-switch") {
        tip.innerHTML = tipStorage.theme[currentLang][currentTheme];
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

export { showTip, hideTip };