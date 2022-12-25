import {
  saveDataToLocalSt,
  loadDataFromLocalSt,
} from './utils/local-st-functions';
import { fetchGenres } from './manipulation-with-api/get-genres';

import { renderOnSwithLang } from './utils/render-on switch-lang';

const refs = {
  langSwitcher: document.querySelector('.language-switcher__checkbox'),
};
let dataLanguage = document.querySelectorAll('[data-enlang]');

checkLocalStrLanguage();
refs.langSwitcher.addEventListener('change', changeLanguage);

function checkLocalStrLanguage() {
  const storageLanguage = loadDataFromLocalSt('language');
  if (storageLanguage !== undefined) {
    if (storageLanguage === 'EN') {
      changeLanguageTextTo('UA');
      document.body.classList.add('en');
    } else {
      changeLanguageTextTo('EN');
      document.body.classList.add('ua');
    }
  } else {
    changeLanguageTextTo('EN');
    document.body.classList.add('ua');
    saveDataToLocalSt('language', 'UA');
  }
}

function changeLanguage(evt) {
  if (document.body.classList.contains('ua')) {
    changeLanguageTextTo('UA');
    changeLanguageLocalStr('UA');
    changeLanguageClass('ua');
  } else {
    changeLanguageTextTo('EN');
    changeLanguageLocalStr('EN');
    changeLanguageClass('en');
  }
  fetchGenres();
  renderOnSwithLang();
}

function changeLanguageClass(language) {
  if (language === 'ua') {
    document.body.classList.remove('ua');
    document.body.classList.add('en');
  } else {
    document.body.classList.remove('en');
    document.body.classList.add('ua');
  }
}

function changeLanguageLocalStr(language) {
  if (language === 'UA') {
    saveDataToLocalSt('language', 'EN');
  } else {
    saveDataToLocalSt('language', 'UA');
  }
}

function changeLanguageTextTo(language) {
  if (language === 'EN') {
    dataLanguage.forEach(data => {
      data.textContent = data.dataset.ualang;
      if (data.hasAttribute('placeholder')) {
        data.placeholder = data.dataset.ualang;
      }
    });
  } else {
    dataLanguage.forEach(data => {
      data.textContent = data.dataset.enlang;
      if (data.hasAttribute('placeholder')) {
        data.placeholder = data.dataset.enlang;
      }
    });
  }
}

