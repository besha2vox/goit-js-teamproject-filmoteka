export class API {
  constructor() {
    this._queryToFetch = '';
    this._pageToFetch = 1;

    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = '9cca312caffd11f4ae9f11244d585025';
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

  async getTrendingMovies(time) {
    // const params = new URLSearchParams({
    //   api_key: this.API_KEY,
    //   page: this._pageToFetch,
    //   keyword: this._queryToFetch,
    //   language: getLanguage(),
    // });

    // const url = `${this.BASE_URL}trending/movie/${time}?${params.toString()}`;

    const url = `${this.BASE_URL}trending/movie/${time}?api_key=${this.API_KEY}`;

    return await this.basicFetch(url);
  }


  // Поиск Что сейчас смотрят

  async getNowPlaingMovies() {
    const url = `${this.BASE_URL}/movie/now_playing?api_key=${this.API_KEY}`;

    return await this.basicFetch(url);
  }

  // Поиск фильмов, которые скоро выйдут в кинотеатрах

  async getUpcomingMovies() {
    const url = `${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}`;

    return await this.basicFetch(url);
  }

  //? ПОШУК ЗА АЙДІ

  async getSearchMoviesByID(type, id) {
    // const params = new URLSearchParams({
    //   api_key: this.API_KEY,
    //   language: getLanguage(),
    // });

    // const url = `${this.BASE_URL}movie/${id}?${params.toString()}`;

    const url = `${this.BASE_URL}movie/${id}?api_key=${this.API_KEY}`;

    return await this.basicFetch(url);
  }

  //? ПОШУК ЗА КЛЮЧОВИМ СЛОВОМ

  async getMoviesByKeyWord(type) {
    // const params = new URLSearchParams({
    //   api_key: this.API_KEY,
    //   language: getLanguage(),
    //   query: (this._queryToFetch = ''),
    // });

    // const url = `${this.BASE_URL}search/movie?${params.toString()}`;

    const url = `${this.BASE_URL}search/movie?api_key=${this.API_KEY}&query=${this._queryToFetch}`;
    return await this.basicFetch(url);
  }

  //? ПОШУК ТРЕЙЛЕРА ПО АЙДІ

  async getMovieTreiler(type, id) {
    const url = `${this.BASE_URL}movie/${id}/videos?api_key=${this.API_KEY}`;
    return await this.basicFetch(url);
  }

  //? ЗАПИТ СПИСКУ ЖАНРІВ

  async getGenres(ids) {
    const url = `${this.BASE_URL}genre/movie/list?api_key=${this.API_KEY}`;
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

//? ПЕРЕВІРКА ОБРАНОЇ МОВИ

function getLanguage() {
  return localStorage.getItem('lang');
}
