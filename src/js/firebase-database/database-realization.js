import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  onSnapshot,
  deleteField,
} from 'firebase/firestore';
import { firebaseConfig } from '../firebase-auth/firebase-config';
import { loadDataFromLocalSt } from '../utils/local-st-functions';
import {
  homePageInterface,
  renderFilmListsFromDB,
  renderFilmsFromDB,
} from '../change-page';

const KEY = 'userUID';
const LIST_KEY = 'film-list';
const PAGE_KEY = 'page';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// homePageInterface();

monitorsChangesInDB('queue');
monitorsChangesInDB('watched');

function monitorsChangesInDB(list) {
  const snapshot = onSnapshot(doc(db, loadDataFromLocalSt(KEY), list), doc => {
    if (loadDataFromLocalSt(PAGE_KEY) === 'library') {
      renderFilmListsFromDB(loadDataFromLocalSt(LIST_KEY));
    }
  });
}

async function deleteFilmFromList(data, list) {
  try {
    await updateDoc(doc(db, loadDataFromLocalSt(KEY), list), {
      [Number(data)]: deleteField(),
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function getUserDataFromDB(list) {
  try {
    const docSnap = await getDoc(doc(db, loadDataFromLocalSt(KEY), list));

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
    await updateDoc(doc(db, loadDataFromLocalSt(KEY), list), {
      [Number(data)]: [Date.now().toString()],
    });
  } catch (error) {
    console.log(error.message);
  }
}

// {
//       [Date.now()]: arrayUnion(data),
//     }

// async function createUserDoc(id, name, email) {
//   try {
//     await setDoc(doc(db, 'users', id), {
//       name,
//       email,
//       watched: [],
//       queue: [],
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

async function createUserDoc(id, list) {
  try {
    await setDoc(doc(db, id, list), { 1: 1 });
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
