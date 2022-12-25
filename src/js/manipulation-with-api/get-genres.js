import { API } from '../api';
import { saveDataToLocalSt } from '../utils/local-st-functions';

const api = new API();

export const GENRES_STORAGE_KEY = 'all_genres';

async function fetchGenres() {
  const genres = await createGenreData();
  const stringifyGenres = JSON.stringify(genres.genres);
  saveDataToLocalSt(GENRES_STORAGE_KEY, stringifyGenres);
}

async function createGenreData() {
  try {
    return await api.getGenres();
  } catch (error) {
    console.log(error.message);
  }
}

fetchGenres();

export { fetchGenres };
