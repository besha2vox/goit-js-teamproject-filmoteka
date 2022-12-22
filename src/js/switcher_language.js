const storageLanguage = loadDataFromLocalSt("language");
if (storageLanguage !== undefined) {
    if (storageLanguage === "EN") {
        refs.span.textContent = "EN";
    } else {
        refs.span.textContent = "UA";
    }
} else {
    refs.span.textContent = "UA";
}

refs.langSwitcher.addEventListener('change', changeLanguage);

function changeLanguage(evt) {
    if (refs.span.textContent === 'UA') {
        refs.span.textContent = 'EN';   
        saveDataToLocalSt("language", "EN");
    } else { 
        refs.span.textContent = "UA"; 
        saveDataToLocalSt("language", "UA");
}
}

export { refs, changeLanguage };