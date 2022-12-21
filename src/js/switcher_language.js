const refs = {
    langSwitcher: document.querySelector('.language-switcher__checkbox'),
    span: document.querySelector('.language-switcher__lang'),
};

// если локалстр пустой или там выбран укр --- укряз, иначе - англ

refs.langSwitcher.addEventListener('change', changeLanguage);

function changeLanguage(evt) {
    console.log('hi');
    if (refs.span.textContent === 'UA') {
        refs.span.textContent = 'EN';   
        console.log('change');
   // локалстор    
    } else { refs.span.textContent = "UA"; 
    //  локалстор 
}
}

export { refs, changeLanguage };