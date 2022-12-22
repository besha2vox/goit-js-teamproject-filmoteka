import {
  libraryLink,
  homeLink,
  libraryPage,
  homePage,
  watchedBtn,
  queueBtn,
} from './firebase-auth/auth-refs';
import {
  classToggle,
  showElements,
  hideElements,
} from './firebase-auth/interface-change';

libraryLink.addEventListener('click', onLibraryPage);
homeLink.addEventListener('click', onHomePage);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick(event) {
  event.preventDefault();

  classToggle(watchedBtn, 'add', 'button__header--active');
  classToggle(queueBtn, 'remove', 'button__header--active');
}

function onQueueBtnClick(event) {
  event.preventDefault();

  classToggle(queueBtn, 'add', 'button__header--active');
  classToggle(watchedBtn, 'remove', 'button__header--active');
}

function onLibraryPage(event) {
  event.preventDefault();

  classToggle(libraryLink, 'add', 'active');
  classToggle(homeLink, 'remove', 'active');
  classToggle(watchedBtn, 'add', 'button__header--active');
  classToggle(queueBtn, 'remove', 'button__header--active');

  hideElements(homePage);
  showElements(libraryPage);
}

function onHomePage(event) {
  event.preventDefault();

  classToggle(homeLink, 'add', 'active');
  classToggle(libraryLink, 'remove', 'active');

  hideElements(libraryPage);
  showElements(homePage);
}
