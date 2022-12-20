# Привіт котики

Спробую зрозуміло описати.

## Клас API для роботи із API TheMovieDatabase

Імпортуйте його до себе у файл та ініціалізуйте. Він не приймає жодного
пареметра.

```js
import { API } from './api';

const api = new API();
```

# Методи екземпляра:

1. Пошук трендів виконує метод `api.getTrendingMovies(type, time)`. Він приймає
   2 параметри `type`(`'movie'` або `'tv'`) i `time` (`'day'` або `'week'`).
2. Пошук за ключовими словами виконує метод `api.getMoviesByKeyWord(type)`. Він
   у якості параметра приймає лише `type`(`'movie'` або `'tv'`). Цей метод
   використовується для рендеру модального вікна.
3. Пошук трейлера виконує метод `api.getMovieTreiler(type, id)`. Він приймає 2
   параметри `type`(`'movie'` або `'tv'`) i `id` обраного фільма.
4. Для пошуку за ключовими словами необхідно змінити значення властивості query
   за допомогою сетера `api.queryToFetch = keyword`(`keyword` - це значення інпута
   у полі пошуку). Далі викликаємо метод `api.getMoviesByKeyWord(type)`. Він у
   якості параметра приймає лише `type`(`'movie'` або `'tv'`).
5. Для пагінації клас має:

- метод `api.resetPage()` для анулювання номеру сторінки;
- метод `api.incrementPage()` для збільшення номеру сторінки на 1(для наступної
  сторінки);
- метод `api.decrementPage()` для зменшення номеру сторінки на 1(для
  попередньої);
- сетер `api.pageToFetch = num`, де `num` це номер обраної сторінки при
  натисканні на кнопку пагінації.
- гетер `api.pageToFetch` для отримання поточної сторінки (поки не знаю де може
  знадобитись, але хай буде)
