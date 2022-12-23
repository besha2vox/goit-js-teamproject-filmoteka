import { API } from '../api';

const api = new API();

export async function createGenreData() {
  try {
    return await api.getGenres();
  } catch (error) {
    console.log(error.message);
  }
}
