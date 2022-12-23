import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import { firebaseConfig } from '../firebase-auth/firebase-config';
import { loadDataFromLocalSt } from '../utils/local-st-functions';
import { renderFilmsFromDB, homePageInterface } from '../change-page';

const KEY = 'userUID';
const LIST_KEY = 'film-list';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

homePageInterface();

function monitorsChangesInDB() {
  const snapshot = onSnapshot(
    doc(db, 'users', loadDataFromLocalSt(KEY)),
    doc => {
      renderFilmsFromDB(doc.data()[loadDataFromLocalSt(LIST_KEY)]);
    }
  );
}

async function deleteFilmFromList(data, list) {
  try {
    await updateDoc(doc(db, 'users', `${loadDataFromLocalSt(KEY)}`), {
      [list]: arrayRemove(data),
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

async function addFilmToTheList(data, list) {
  try {
    await updateDoc(doc(db, 'users', `${loadDataFromLocalSt(KEY)}`), {
      [list]: arrayUnion(data),
    });
  } catch (error) {
    console.log(error.message);
  }
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
  addFilmToTheList,
  deleteFilmFromList,
  getUserDataFromDB,
  monitorsChangesInDB,
  db,
};
