import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from 'firebase/auth';
import {
  createUserDoc,
  getUserDataFromDB,
} from '../firebase-database/database-realization';
import { firebaseConfig } from './firebase-config';
import {
  saveDataToLocalSt,
  removeDataFromLocalSt,
  loadDataFromLocalSt,
} from '../utils/local-st-functions';
import {
  loginFormNotify,
  showElements,
  hideElements,
  classToggle,
} from './interface-change';
import {
  siteNav,
  sigupLink,
  loginLink,
  logoutLink,
  greeting,
  loginLinks,
  logoutLinks,
  homeLink,
} from './auth-refs';
import { Modal } from '../class-modal';
import { loginModalMarkup, signupModalMarkup } from './login-modal-markup';
import { homePageInterface, libraryPageInterface } from '../change-page';

const KEY = 'userUID';
const PAGE_KEY = 'page';

//app initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//listen for auth state
onAuthStateChanged(auth, user => {
  //change interface
  if (user) {
    if (loadDataFromLocalSt(PAGE_KEY) === 'library') {
      libraryPageInterface();
    } else {
      homePageInterface();
    }
    showElements(loginLinks);
    hideElements(logoutLinks);
    classToggle(siteNav, 'add', 'visible');
    // classToggle(greeting, 'add', 'visible');
    greeting.querySelector('.user-name').textContent = `${user.displayName}!`;
    greeting.style.display = 'block';
  } else {
    homePageInterface();
    saveDataToLocalSt(PAGE_KEY, 'home');
    showElements(logoutLinks);
    hideElements(loginLinks);
    classToggle(homeLink, 'add', 'active');
    classToggle(siteNav, 'add', 'visible');
    // classToggle(greeting, 'remove', 'visible');
    greeting.querySelector('.user-name').textContent = '';
    greeting.style.display = 'none';
  }
});

const modalOptions = {
  onShow: onLoginModalShow,
};

const loginModal = new Modal(modalOptions);

//set event listeners
sigupLink.addEventListener('click', onSignupLinkClick);
loginLink.addEventListener('click', onLoginLinkClick);
logoutLink.addEventListener('click', onLogoutClick);

//========== callback functions ==========
function onSignupLinkClick() {
  const formMarkup = signupModalMarkup();
  loginModal.open(formMarkup);
}

function onLoginLinkClick() {
  const formMarkup = loginModalMarkup();
  loginModal.open(formMarkup);
}

async function onLogoutClick(event) {
  event.preventDefault();

  homePageInterface();

  // removeDataFromLocalSt(KEY);

  //logout the user
  await signOut(auth);
}

function onLoginModalShow() {
  //========== get form refs ==========
  const modalAuth = document.querySelector('.modal');
  const signupForm = modalAuth.querySelector('.form__signup');
  const loginForm = modalAuth.querySelector('.form__login');
  const signupFormTitle = modalAuth.querySelector('#signup');
  const loginFormTitle = modalAuth.querySelector('#login');
  const googleLogin = modalAuth.querySelectorAll(
    '.auth-providers__link--google-login'
  );
  const facebookLogin = modalAuth.querySelectorAll(
    '.auth-providers__link--facebook-login'
  );

  classToggle(modalAuth, 'add', 'modal__auth');

  //========== set eventListeners ==========
  signupFormTitle.addEventListener('click', onSignupTitleClick);
  loginFormTitle.addEventListener('click', onLoginTitleClick);
  signupForm.addEventListener('submit', onSignupFormSubmit);
  loginForm.addEventListener('submit', onLoginFormSubmit);
  googleLogin.forEach(link =>
    link.addEventListener('click', onGoogleLinkClick)
  );
  facebookLogin.forEach(link =>
    link.addEventListener('click', onFacebookLinkClick)
  );

  //========== callback functions inside login-modal ==========
  function onLoginTitleClick(event) {
    event.preventDefault();

    const parent = event.target.closest('form');

    parent.classList.value.split(' ').find(el => {
      if (el !== 'slide-up') {
        classToggle(parent, 'add', 'slide-up');
      } else {
        classToggle(signupFormTitle.closest('form'), 'add', 'slide-up');
        classToggle(modalAuth, 'add', 'modal__signup--up');
        classToggle(parent, 'remove', 'slide-up');
      }
    });
  }

  function onSignupTitleClick(event) {
    event.preventDefault();

    const parent = event.target.closest('form');

    parent.classList.value.split(' ').find(el => {
      if (el !== 'slide-up') {
        classToggle(parent, 'add', 'slide-up');
      } else {
        classToggle(loginFormTitle.closest('form'), 'add', 'slide-up');
        classToggle(modalAuth, 'remove', 'modal__signup--up');
        classToggle(parent, 'remove', 'slide-up');
      }
    });
  }

  async function onFacebookLinkClick(event) {
    event.preventDefault();

    const provider = new FacebookAuthProvider();

    try {
      const result = signInWithPopup(auth, provider);

      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      saveDataToLocalSt(KEY, user.uid);

      getUserDataFromDB().then(data => {
        if (!data) {
          createUserDoc(user.uid, 'watched');
          createUserDoc(user.uid, 'queue');
        }
      });

      loginModal.close();
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    }
  }

  async function onGoogleLinkClick(event) {
    event.preventDefault();

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      saveDataToLocalSt(KEY, user.uid);

      getUserDataFromDB().then(data => {
        if (!data) {
          createUserDoc(user.uid, 'watched');
          createUserDoc(user.uid, 'queue');
        }
      });

      loginModal.close();
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  }

  async function onLoginFormSubmit(event) {
    event.preventDefault();

    // get user info
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const errorNotify = loginForm.querySelector('.form__notification--error');

    if (!email || !password) {
      loginFormNotify(errorNotify, 'All fields must be filled!');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      saveDataToLocalSt(KEY, user.uid);

      greeting.querySelector('.user-name').textContent = `${user.displayName}!`;

      //clear form
      loginForm.reset();

      loginModal.close();
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        loginFormNotify(
          errorNotify,
          'Invalid password. Enter a valid password and try again.'
        );
      }

      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        loginFormNotify(
          errorNotify,
          'There is no registered user with this email. Please register or try again.'
        );
      }
    }
  }

  async function onSignupFormSubmit(event) {
    event.preventDefault();

    // get user info
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const userName = event.currentTarget.userName.value;
    const errorNotify = signupForm.querySelector('.form__notification--error');

    if (!email || !password || !userName) {
      loginFormNotify(errorNotify, 'All fields must be filled!');
      return;
    }

    if (password.length < 6) {
      loginFormNotify(
        errorNotify,
        'The password must be at least six characters long.'
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      saveDataToLocalSt(KEY, user.uid);

      greeting.querySelector('.user-name').textContent = `${userName}!`;
      greeting.style.display = 'block';

      //clear form
      signupForm.reset();

      // createUserDoc(user.uid, userName, user.email);

      createUserDoc(user.uid, 'watched');
      createUserDoc(user.uid, 'queue');

      if (!user.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: userName,
        });
      }

      loginModal.close();
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        loginFormNotify(
          errorNotify,
          'A user with this email already exists. Sign in or try again.'
        );
        return;
      }
    }
  }
}
