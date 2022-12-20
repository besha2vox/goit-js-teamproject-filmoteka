export class TheMovieDatabaseAPI {
  constructor() {
    this._queryToFetch = '';
    this._pageToFetch = 1;

    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.API_KEY = '9cca312caffd11f4ae9f11244d585025';
    this.TRENDING_MOVIES = 'trending/all/';
  }

  async basicFetch(url) {
    return await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  //? ТРЕНДИ

  async getTrendingMovies(type, time) {
    const params = new URLSearchParams({
      api_key: this.API_KEY,
      page: this._pageToFetch,
      keyword: this._queryToFetch,
      language: getLanguage(),
    });

    const url = `${
      this.BASE_URL
    }/trending/${type}/${time}?${params.toString()}`;

    return await this.basicFetch(url);
  }

  //? ПОШУК ЗА АЙДІ

  async getSearchMoviesByID(type, id) {
    const params = new URLSearchParams({
      api_key: this.API_KEY,
      language: getLanguage(),
    });

    const url = `${this.BASE_URL}${type}/${id}?${params.toString()}`;

    return await this.basicFetch(url);
  }

  //? ПОШУК ЗА КЛЮЧОВИМ СЛОВОМ

  async getMoviesByKeyWord(type) {
    const params = new URLSearchParams({
      api_key: this.API_KEY,
      language: getLanguage(),
      query: (this._queryToFetch = ''),
    });

    const url = `${this.BASE_URL}search/${type}?${params.toString()}`;
    return await this.basicFetch(url);
  }

  //? ПОШУК ТРЕЙЛЕРА ПО АЙДІ

  async getMovieTreiler(type, id) {
    const url = `${this.BASE_URL}${type}/${id}/videos?api_key=${this.API_KEY}`;
    return await this.basicFetch(url);
  }

  incrementPage() {
    this._pageToFetch += 1;
  }

  decrementPage() {
    if (this._pageToFetch <= 1) return;
    this._pageToFetch -= 1;
  }

  resetPage() {
    this._pageToFetch = 0;
  }

  get queryToFetch() {
    return this._queryToFetch;
  }

  set queryToFetch(keyword) {
    this._queryToFetch = keyword;
  }

  get pageToFetch() {
    return this._pageToFetch;
  }

  set pageToFetch(num) {
    this._pageToFetch = num;
  }
}

//! ПЕРЕНЕСТИ У ФАЙЛ ІЗ СВІТЧЕРОМ МОВИ

function getLanguage() {
  return localStorage.getItem('lang');
}
