GogoAnime Scraper
===================

This tool scrapes information from gogoanime.so to get animes and movies information.

It is an easy and simple to use tool for getting information such as `Genres`, `Popular Animes`, `Recently Added Series`, `Anime Information`, `Movie Information`, `Ongoing Series` and `Recently Updated Series` from gogoanime.so.

## Installation
```
npm install node-gogoanime-scraper
```

## Examples

#### Sample Anime Object Response

```json
{
    "poster": "https://gogocdn.net/cover/toaru-kagaku-no-railgun-t.png",
    "title": "Toaru Kagaku no Railgun T",
    "synonyms": ["Toaru Kagaku no Railgun 3", "Toaru Kagaku no Choudenjihou 3", "A Certain Scientific Railgun 3", "とある科学の超電磁砲[レールガン]T"],
    "type": "Winter 2020 Anime",
    "plot": "Third season of Toaru Kagaku no Railgun...",
    "genres": ["Action", "Sci-Fi", "Super Power"],
    "released": 2020,
    "status": "Ongoing",
    "episodes": 23,
    "slug": "toaru-kagaku-no-railgun-t"
}
```

#### Search for related animes named 'Sword Art Online II'

```js

const Anime = require('node-gogoanime-scraper')

const response = await Anime.fetchRelatedAnime('Sword Art Online II');

// Optionally, you can provide a page parameter for navigating through pages
const response = await Anime.fetchRelatedAnime('Sword Art Online II', 1);

```

#### Retrieved the list of popular animes

```js

const Anime = require('node-gogoanime-scraper')

// Optionally, you can also provide a parameter for the page 
const response = await Anime.fetchPopularAnimes();

```

#### Retrieved the list of recently added series

```js

const Anime = require('node-gogoanime-scraper')

const response = await Anime.fetchRecentlyAddedSeries();

```

#### Retrieved the list of ongoing series

```js

const Anime = require('node-gogoanime-scraper')

const response = await Anime.fetchOngoingSeries();

```

#### Retrieved the list of anime movies

```js

const Anime = require('node-gogoanime-scraper')

// Optionally, you can also provide a parameter for the page 
const response = await Anime.fetchMovies();

```

#### Retrieved the list of anime by season and year

```js

const Anime = require('node-gogoanime-scraper')

// The available values for season are Summer, Spring, Winter, and Autumn
// Only animes starting from year 2014 is available.

// Retrieving the Winter 2020 Animes
const response = await Anime.fetchAnimeBySeason('Winter', 2020);

// Optionally, you can also provide a third parameter for navigating through pages 
const response = await Anime.fetchAnimeBySeason('Winter', 2020, 1);

```

#### Retrieved the list of available genres

```js

const Anime = require('node-gogoanime-scraper')

const response = await Anime.fetchGenres();

```

#### Retrieved the list of anime by genre

```js

const Anime = require('node-gogoanime-scraper')

// To know the list of genres available, you may use the fetchGenres()
// Optionally, you can also provide a 2nd parameter for the page 
const response = await Anime.fetchAnimeByGenre('Adventure');

```

#### Retrieved the recently updated anime

```js

const Anime = require('node-gogoanime-scraper')

// Optionally, you can also provide a 2nd parameter for the page 
const response = await Anime.fetchRecentlyUpdated();

```

#### Retrieve all episodes for anime

```js
const Anime = require('node-gogoanime-scraper')

const anime = await Anime.getAnime('aggressive-retsuko');
const promises = [];

for (let i = 1; i < anime.episodes; i += 1) {
  const episode = Anime.getEpisode(anime.slug, i);
  promises.push(episode);
}

const episodes = await Promise.all(promises);

// do something with x
const x = { ...anime, episodes };
```

An episode will contain all mirrors with source and server.

### Other information

Please raise an issue or submit a PR if you find anything that requires fixing.

