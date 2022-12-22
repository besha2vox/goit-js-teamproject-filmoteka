const refs = {
    toggle: document.querySelector('.theme-switch__toggle'),
    langSwitcher: document.querySelector('.language-switcher__checkbox'),
    span: document.querySelector('.language-switcher__lang'),
};

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

refs.toggle.addEventListener('change', changeTheme);


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

export { refs, changeTheme };