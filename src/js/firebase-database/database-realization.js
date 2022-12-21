import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from 'firebase/firestore';
import { firebaseConfig } from '../firebase-auth/firebase-config';
import { loadDataFromLocalSt } from '../utils/local-st-functions';

const KEY = 'userUID';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//========== to delete
// const addWatched = document.getElementById('ad-watched');
// const addQueue = document.getElementById('ad-queue');
// const getWatched = document.getElementById('show-watched');
// const getQueue = document.getElementById('show-queue');

// addWatched.addEventListener('click', addFilmToWatchedList);
// addQueue.addEventListener('click', addFilmToQueueList);
// getWatched.addEventListener('click', deleteFilmFromList);
// getQueue.addEventListener('click', getUserDataFromDB);

// let counter = 9;

async function deleteFilmFromList() {
  try {
    await updateDoc(doc(db, 'users', `${loadDataFromLocalSt(KEY)}`), {
      queue: arrayRemove(counter),
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function getUserDataFromDB() {
  try {
    const docSnap = await getDoc(
      doc(db, 'users', `${loadDataFromLocalSt(KEY)}`)
    );

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return undefined;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function addFilmToQueueList() {
  try {
    await updateDoc(doc(db, 'users', `${loadDataFromLocalSt(KEY)}`), {
      queue: arrayUnion(counter),
    });
  } catch (error) {
    console.log(error.message);
  }

  counter += 1;
}

async function addFilmToWatchedList() {
  try {
    await updateDoc(doc(db, 'users', `${loadDataFromLocalSt(KEY)}`), {
      watched: arrayUnion(counter),
    });
  } catch (error) {
    console.log(error.message);
  }

  counter += 1;
}

async function createUserDoc(id, name, email) {
  try {
    await setDoc(doc(db, 'users', id), {
      name,
      email,
      watched: [],
      queue: [],
    });
  } catch (error) {
    console.log(error.message);
  }
}

export {
  createUserDoc,
  addFilmToWatchedList,
  addFilmToQueueList,
  deleteFilmFromList,
  getUserDataFromDB,
};
