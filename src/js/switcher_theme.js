const refs = {
    toggle: document.querySelector('.theme-switch__toggle'),
};
document.body.classList.add("light-theme");
refs.toggle.addEventListener('change', changeTheme);

function changeTheme(evt) {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }

}

export { refs, changeTheme };