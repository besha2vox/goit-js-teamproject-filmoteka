import { refs, changeTheme } from "./js/switcher_theme";

refs.body.classList.add("light-theme");
refs.toggle.addEventListener('change', changeTheme);
