const refs = {
    toggle: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body')
};
refs.body.classList.add("light-theme");
refs.toggle.addEventListener('change', changeTheme);

function changeTheme(evt) {
    if (refs.body.classList.contains("light-theme")) {
        refs.body.classList.remove("light-theme");
        refs.body.classList.add("dark-theme");
    } else {
        refs.body.classList.remove("dark-theme");
        refs.body.classList.add("light-theme");
    }

}

export { refs, changeTheme };