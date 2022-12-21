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
} from '../utils/local-st-functions';
import {
  loginFormNotify,
  showElements,
  hideElements,
  classToggle,
} from './interface-change';
import {
  libraryLink,
  logoutLink,
  enterModal,
  signupForm,
  loginForm,
  loginLinks,
  logoutLinks,
  googleLogin,
  facebookLogin,
  greeting,
  addBtns,
  siteNav,
} from './auth-refs';

const KEY = 'userUID';

//app initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//listen for auth state
onAuthStateChanged(auth, user => {
  //change interface
  if (user) {
    showElements(loginLinks);
    hideElements(logoutLinks);
    classToggle(siteNav, 'add', 'visible');
    // classToggle(greeting, 'add', 'visible');
    greeting.querySelector('.user-name').textContent = `${user.displayName}!`;
    greeting.style.display = 'block';
  } else {
    showElements(logoutLinks);
    hideElements(loginLinks);
    classToggle(siteNav, 'add', 'visible');
    // classToggle(greeting, 'remove', 'visible');
    greeting.querySelector('.user-name').textContent = '';
    greeting.style.display = 'none';
  }
});

//set event listeners
signupForm.addEventListener('submit', onSignupFormSubmit);
logoutLink.addEventListener('click', onLogoutClick);
loginForm.addEventListener('submit', onLoginFormSubmit);
googleLogin.forEach(link => link.addEventListener('click', onGoogleLinkClick));
facebookLogin.forEach(link =>
  link.addEventListener('click', onFacebookLinkClick)
);

//callback-functions
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

    getUserDataFromDB().then(data =>
      !data ? createUserDoc(user.uid, user.displayName, user.email) : false
    );

    classToggle(enterModal, 'remove', 'visible');
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

    getUserDataFromDB().then(data =>
      !data ? createUserDoc(user.uid, user.displayName, user.email) : false
    );

    classToggle(enterModal, 'remove', 'visible');
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

    //change interface
    classToggle(enterModal, 'remove', 'visible');
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

async function onLogoutClick(event) {
  event.preventDefault();

  removeDataFromLocalSt(KEY);

  //logout the user
  await signOut(auth);
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

    //change interface
    classToggle(enterModal, 'remove', 'visible');

    createUserDoc(user.uid, userName, user.email);

    if (!user.displayName) {
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
    }
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
