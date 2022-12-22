// import {
//   sigupLink,
//   loginLink,
//   enterModal,
//   modalAuth,
//   loginFormTitle,
//   modalAuth,
//   signupFormTitle,
// } from './auth-refs';
// import { classToggle } from './interface-change';
// import { Modal } from '../class-modal';
// import { loginModalMarkup } from './login-modal-markup';

// const loginModal = new Modal();

// sigupLink.addEventListener('click', onSignupLinkClick);
// loginLink.addEventListener('click', onLoginLinkClick);

// // signupFormTitle.addEventListener('click', onSignupTitleClick);
// // loginFormTitle.addEventListener('click', onLoginTitleClick);

// function onSignupLinkClick() {
//   loginModal.open(loginModalMarkup);
//   classToggle(enterModal, 'add', 'visible');
//   classToggle(loginFormTitle.closest('form'), 'add', 'slide-up');
//   classToggle(signupFormTitle.closest('form'), 'remove', 'slide-up');
//   classToggle(modalAuth, 'remove', 'modal__signup--up');

//   document.addEventListener('keydown', event => {
//     if (event.code !== 'Escape') return;

//     classToggle(enterModal, 'remove', 'visible');
//   });
// }

// function onLoginLinkClick() {
//   loginModal.open(loginModalMarkup);
//   classToggle(enterModal, 'add', 'visible');
//   classToggle(loginFormTitle.closest('form'), 'remove', 'slide-up');
//   classToggle(signupFormTitle.closest('form'), 'add', 'slide-up');
//   classToggle(modalAuth, 'add', 'modal__signup--up');

//   document.addEventListener('keydown', event => {
//     if (event.code !== 'Escape') return;

//     classToggle(enterModal, 'remove', 'visible');
//   });
// }

// function onLoginTitleClick(event) {
//   event.preventDefault();

//   const parent = event.target.closest('form');

//   parent.classList.value.split(' ').find(el => {
//     if (el !== 'slide-up') {
//       classToggle(parent, 'add', 'slide-up');
//     } else {
//       classToggle(signupFormTitle.closest('form'), 'add', 'slide-up');
//       classToggle(modalAuth, 'add', 'modal__signup--up');
//       classToggle(parent, 'remove', 'slide-up');
//     }
//   });
// }

// function onSignupTitleClick(event) {
//   event.preventDefault();

//   const parent = event.target.closest('form');

//   parent.classList.value.split(' ').find(el => {
//     if (el !== 'slide-up') {
//       classToggle(parent, 'add', 'slide-up');
//     } else {
//       classToggle(loginFormTitle.closest('form'), 'add', 'slide-up');
//       classToggle(modalAuth, 'remove', 'modal__signup--up');
//       classToggle(parent, 'remove', 'slide-up');
//     }
//   });
// }
