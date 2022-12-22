import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './tool-tip';

const refs = {
    langSwitcher: document.querySelector('.language-switcher__checkbox'),
    switcherText: document.querySelector('.language-switcher__lang'),
    placeholderUa: document.querySelector('.form_input'),
};

const storageLanguage = loadDataFromLocalSt("language");
if (storageLanguage !== undefined) {
    if (storageLanguage === "EN") {
        changeLanguageText("EN");   
        changeLanguageClass("en");
    } else {
        changeLanguageText("UA");   
        changeLanguageClass("ua");
    }
} else {
    changeLanguageText("UA");   
    document.body.classList.add("ua");
}

refs.langSwitcher.addEventListener('change', changeLanguage);

function changeLanguage(evt) {
    if (document.body.classList.contains("ua")) {
        changeLanguageText("UA");   
        changeLanguageLocalStr("UA");
        changeLanguageClass("ua");
    } else { 
        changeLanguageText("EN");   
        changeLanguageLocalStr("EN");
        changeLanguageClass("en");
}
}

function changeLanguageClass(language) {
    if (language === 'ua') {
        document.body.classList.remove("ua");
        document.body.classList.add("en");
    } else {
        document.body.classList.remove("en");
        document.body.classList.add("ua");
    }
}

function changeLanguageLocalStr(language) {
    if (language === 'UA') {  
        saveDataToLocalSt("language", "EN");
    } else {  
        saveDataToLocalSt("language", "UA");
}
}

function changeLanguageText(language) {
    if (language === 'UA') {
        refs.switcherText.textContent = 'EN';
        refs.placeholderUa.placeholder = "Movie search";   
    } else { 
        refs.switcherText.textContent = "UA";
        refs.placeholderUa.placeholder = "Пошук фильму"; 
}

}