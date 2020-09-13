const BASE_URL = 'https://gogoanime.so/';

const URL = Object.freeze({
  GET_ANIME: `${BASE_URL}/category`,
  GET_ANIME_BY_GENRE: `${BASE_URL}/genre`,
  ANIME_SEASON: `${BASE_URL}/sub-category`,
  POPULAR_ANIME: `${BASE_URL}/popular.html`,
  GET_MOVIES: `${BASE_URL}/anime-movies.html`,
  SEARCH_ANIME: `${BASE_URL}/search.html`,
});

const SEASONS = ['spring', 'winter', 'summer', 'fall'];

const MINIMUM_YEAR = 2014;

const MAXIMUM_YEAR = new Date().getFullYear();

module.exports = {
  URL,
  BASE_URL,
  SEASONS,
  MINIMUM_YEAR,
  MAXIMUM_YEAR,
};
