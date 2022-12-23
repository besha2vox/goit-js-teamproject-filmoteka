import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './utils/local-st-functions';

class LanguageSwitcher {
constructor() {
    this.refs = {
    langSwitcher: document.querySelector('.language-switcher__checkbox'),
    };
    this.dataLanguage = document.querySelectorAll("[data-enlang]");
}

init() {
    const storageLanguage = loadDataFromLocalSt("language");
    if (storageLanguage !== undefined) {
    if (storageLanguage === "EN") {
        this.changeLanguageText("EN");
        this.changeLanguageClass("en");
    } else {
        this.changeLanguageText("UA");
        this.changeLanguageClass("ua");
    }
    } else {
    this.changeLanguageText("UA");
    document.body.classList.add("ua");
    }

    this.refs.langSwitcher.addEventListener('change', this.changeLanguage.bind(this));
}

changeLanguage() {
    if (document.body.classList.contains("ua")) {
    this.changeLanguageText("UA");
    this.changeLanguageLocalStr("UA");
    this.changeLanguageClass("ua");
    } else {
    this.changeLanguageText("EN");
    this.changeLanguageLocalStr("EN");
    this.changeLanguageClass("en");
    }
}

changeLanguageClass(language) {
    if (language === 'ua') {
    document.body.classList.remove("ua");
    document.body.classList.add("en");
    } else {
    document.body.classList.remove("en");
    document.body.classList.add("ua");
    }
}

changeLanguageLocalStr(language) {
    if (language === 'UA') {
    saveDataToLocalSt("language", "EN");
    } else {
    saveDataToLocalSt("language", "UA");
    }
}

changeLanguageText(language) {
    if (language === 'UA') {
    this.dataLanguage.forEach((data) => {
        data.textContent = data.dataset.enlang;
        if (data.hasAttribute("placeholder")) {
        data.placeholder = data.dataset.enlang;
        }
    });
    } else {
    this.dataLanguage.forEach((data) => {
        data.textContent = data.dataset.ualang;
        if (data.hasAttribute("placeholder")) {
        data.placeholder = data.dataset.ualang;
        }
    });
    }
}
}

const languageSwitcher = new LanguageSwitcher();
languageSwitcher.init();