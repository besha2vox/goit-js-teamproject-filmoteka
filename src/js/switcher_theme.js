import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './utils/local-st-functions';

const refs = {
    toggleLang: document.querySelector('.theme-switch__toggle'),
};

checkLocalStrLanguage();
refs.toggleLang.addEventListener('change', changeTheme);

function checkLocalStrLanguage() {
    const storageTheme = loadDataFromLocalSt("theme");
    if (storageTheme !== undefined) {
        if (storageTheme === "dark") {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    } else {
        document.body.classList.add("light-theme");
    }
}

function changeTheme(evt) {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        saveDataToLocalSt("theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        saveDataToLocalSt("theme", "light");
    }
}
