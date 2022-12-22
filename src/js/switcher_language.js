import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './tool-tip';

const refs = {
    langSwitcher: document.querySelector('.language-switcher__checkbox'),
    switcherText: document.querySelector('.language-switcher__lang'),
};

const storageLanguage = loadDataFromLocalSt("language");
if (storageLanguage !== undefined) {
    if (storageLanguage === "EN") {
        refs.switcherText.textContent = "EN";
    } else {
        refs.switcherText.textContent = "UA";
    }
} else {
    refs.switcherText.textContent = "UA";
}

refs.langSwitcher.addEventListener('change', changeLanguage);

function changeLanguage(evt) {
    if (refs.switcherText.textContent === 'UA') {
        refs.switcherText.textContent = 'EN';   
        saveDataToLocalSt("language", "EN");
    } else { 
        refs.switcherText.textContent = "UA"; 
        saveDataToLocalSt("language", "UA");
}
}

// class
export { refs, changeLanguage };