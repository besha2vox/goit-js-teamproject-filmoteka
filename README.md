# Привіт котики

Спробую зрозуміло описати.

## Зміст

[Клас API](#клас-api-для-роботи-із-api-themoviedatabase)
[Сітка фільмів(шаблон)](#сітка-фільмівшаблон)
[Шаблон модального вікна](#шаблон-модального-вікна)

## Клас API для роботи із API TheMovieDatabase

Імпортуйте його до себе у файл та ініціалізуйте. Він не приймає жодного
пареметра.

```js
import { API } from './api';

const api = new API();
```

### Методи екземпляра:

1. Пошук трендів виконує метод `api.getTrendingMovies(type, time)`. Він приймає
   2 параметри `type`(`'movie'` або `'tv'`) i `time` (`'day'` або `'week'`).
2. Пошук за ключовими словами виконує метод `api.getMoviesByKeyWord(type)`. Він
   у якості параметра приймає лише `type`(`'movie'` або `'tv'`). Цей метод
   використовується для рендеру модального вікна.
3. Пошук трейлера виконує метод `api.getMovieTreiler(type, id)`. Він приймає 2
   параметри `type`(`'movie'` або `'tv'`) i `id` обраного фільма.
4. Для пошуку за ключовими словами необхідно змінити значення властивості query
   за допомогою сетера `api.queryToFetch = keyword`(`keyword` - це значення
   інпута у полі пошуку). Далі викликаємо метод `api.getMoviesByKeyWord(type)`.
   Він у якості параметра приймає лише `type`(`'movie'` або `'tv'`).
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

## Сітка фільмів(шаблон):

Із АРІ шаблон буде отримувати об'єкт параметрів, необхідні для нас `id`,
`media_type`, `poster_path`, `release_date`, `first_air_date`, `genre_ids`,
`title`, `name`. `title` і `name` це однакова властивість але за виключенням
того, що `title` - це назва фільму, а `name` - це назва серіалу.

<p></p>

Через це необхідно робити додаткову перевірку на тип і передавади у шаблон
потрібне значення(якийсь один із варіантів):

1. Перевірка типу:

```js
let mediaTitle = '';

if (media_type === 'tv') mediaTitle = name;
if (media_type === 'movie') mediaTitle = title;
```

і використовувати `mediaTitle` у шаблоні

2. Перевірка на `undefined`:

```js
const mediaTitle = title ? title : name;
```

у цьому випадку якщо медіа є серіалом, тоді значення `title` буде `undefined` і
запишиться значення `name`, а якщо тип медіа фільм, тоді відразу запишеться
значення `title`.

## Шаблон модального вікна:

Із АРІ шаблон буде отримувати об'єкт параметрів, необхідні для нас
`poster_path`, `genres`, `vote_average`, `vote_count`, `popularity`,
`original_title`, `original_name`, `title`, `name`, `overview`, `title`, `name`.
`title` і `name` це однакова властивість але за виключенням того, що
`title`/`original_title` - це назва фільму, а `name`/`original_name` - це назва
серіалу.

<p></p>

Через це необхідно робити додаткову перевірку на тип і передавади у шаблон
потрібне значення(якийсь один із варіантів):

1. Перевірка типу:

```js
let mediaTitle = '';
let originalTitle = '';

if (media_type === 'tv') {
  mediaTitle = name;
  originalTitle = original_name;
}
if (media_type === 'movie') {
  mediaTitle = title;
  originalTitle = original_title;
}
```

і використовувати `mediaTitle`/`originalTitle` у шаблоні

2. Перевірка на `undefined`:

```js
const mediaTitle = title ? title : name;
const originalTitle = original_title ? original_title : original_name;
```

у цьому випадку якщо медіа є серіалом, тоді значення `title`/`original_title`
буде `undefined` і запишиться значення `name`/`original_name`, а якщо тип медіа
фільм, тоді відразу запишеться значення `title`/`original_title`.
