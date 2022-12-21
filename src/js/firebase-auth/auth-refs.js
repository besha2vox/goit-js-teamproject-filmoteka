const siteNav = document.getElementById('nav');
const libraryLink = document.getElementById('link__library');
const sigupLink = document.getElementById('link__signup');
const loginLink = document.getElementById('link__login');
const logoutLink = document.getElementById('link__logout');
const devider = document.getElementById('devider');
const greeting = document.querySelector('.greeting');
const enterModal = document.getElementById('enter-modal');
const modalAuth = document.getElementById('modal__auth');
const signupForm = document.querySelector('.form__signup');
const loginForm = document.querySelector('.form__login');
const signupFormTitle = document.getElementById('signup');
const loginFormTitle = document.getElementById('login');
const loginLinks = document.querySelectorAll('.login-user');
const logoutLinks = document.querySelectorAll('.logout-user');
const googleLogin = document.querySelectorAll(
  '.auth-providers__link--google-login'
);
const facebookLogin = document.querySelectorAll(
  '.auth-providers__link--facebook-login'
);

export {
  siteNav,
  libraryLink,
  sigupLink,
  loginLink,
  logoutLink,
  devider,
  enterModal,
  modalAuth,
  loginFormTitle,
  signupFormTitle,
  signupForm,
  loginForm,
  greeting,
  loginLinks,
  logoutLinks,
  googleLogin,
  facebookLogin,
};
