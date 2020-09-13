const BASE_URL = 'https://gogoanime.so/';

exports.URL = Object.freeze({
  GET_ANIME: `${BASE_URL}/category`,
  GET_ANIME_BY_GENRE: `${BASE_URL}/genre`,
  ANIME_SEASON: `${BASE_URL}/sub-category`,
  POPULAR_ANIME: `${BASE_URL}/popular.html`,
  GET_MOVIES: `${BASE_URL}/anime-movies.html`,
  SEARCH_ANIME: `${BASE_URL}/search.html`,
});

exports.SEASONS = ['spring', 'winter', 'summer', 'fall'];

exports.MINIMUM_YEAR = 2014;

exports.MAXIMUM_YEAR = new Date().getFullYear();
