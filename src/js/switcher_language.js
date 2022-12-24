import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './utils/local-st-functions';

const refs = {
    langSwitcher: document.querySelector('.language-switcher__checkbox'),
};
let dataLanguage = document.querySelectorAll("[data-enlang]");

checkLocalStrLanguage();
refs.langSwitcher.addEventListener('change', changeLanguage);

function checkLocalStrLanguage() {
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
            saveDataToLocalSt("language", "UA");
        }
}


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
        dataLanguage.forEach((data) => {
        data.textContent = data.dataset.enlang;
    if (data.hasAttribute("placeholder")) {
        data.placeholder = data.dataset.enlang;
    }
}); 
} else { 
    dataLanguage.forEach((data) => {
    data.textContent = data.dataset.ualang;
        if (data.hasAttribute("placeholder")) {
        data.placeholder = data.dataset.ualang;
        }
    });
}
}
