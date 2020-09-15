const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const { BASE_URL, URL } = require('../config/constants');

const { parseAnime } = require('./parser');

const getAnime = async (slug) => {
  const body = await cloudscraper.get(`${URL.GET_ANIME}/${slug}`);
  const $ = cheerio.load(body);

  return {
    ...parseAnime($),
    slug,
  };
};

const getAnimeList = async (url, page) => {
  const body = await cloudscraper.get(url);
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.last_episodes ul.items li').each(
    (_, element) => {
      const $el = $(element);
      const slug = $el
        .find('p.name a')
        .attr('href')
        .replace('/category/', '');

      promises.push(getAnime(slug));
    },
  );

  return {
    items: await Promise.all(promises),
    pages: {
      current: page,
    },
  };
};

exports.getPopularAnimes = async (page = 1) => {
  return getAnimeList(`${URL.POPULAR_ANIME}?page=${page}`, page);
};

exports.getMovies = async (page = 1) => {
  return getAnimeList(`${URL.GET_MOVIES}?page=${page}`, page);
};

exports.searchAnime = async (keyword, page = 1) => {
  return getAnimeList(
    `${URL.SEARCH_ANIME}?keyword=${keyword}&page=${page}`,
    page,
  );
};

exports.getAnimeByGenre = async (genre, page = 1) => {
  return getAnimeList(
    `${URL.GET_ANIME_BY_GENRE}/${genre
      .toLowerCase()
      .split(' ')
      .join('-')}?page=${page}`,
    page,
  );
};

exports.getAnimeBySeason = async (season, year, page = 1) => {
  return getAnimeList(
    `${URL.ANIME_SEASON}/${season.toLowerCase()}-${year}-anime`,
    page,
  );
};

exports.getRecentlyAddedSeries = async () => {
  const body = await cloudscraper.get(BASE_URL);
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.added_series_body ul.listing li').each(
    (_, element) => {
      const $el = $(element);
      const slug = $el
        .find('a')
        .attr('href')
        .replace('/category/', '');
      promises.push(getAnime(slug));
    },
  );

  return {
    items: await Promise.all(promises),
    total: promises.length,
  };
};

exports.getOngoingSeries = async () => {
  const body = await cloudscraper.get(BASE_URL);
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.anime_name.ongoing')
    .siblings('div.series')
    .find('nav.menu_series ul li')
    .each((_, element) => {
      const $el = $(element);
      const slug = $el
        .find('a')
        .attr('href')
        .replace('/category/', '');
      promises.push(getAnime(slug));
    });

  return {
    items: await Promise.all(promises),
    total: promises.length,
  };
};

exports.getGenres = async () => {
  const body = await cloudscraper.get(BASE_URL);
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body nav.genre ul li').each((_, element) => {
    const $el = $(element);
    const genre = $el.find('a').attr('title');
    promises.push(genre);
  });

  return {
    items: await Promise.all(promises),
    total: promises.length,
  };
};

exports.getRecentlyUpdated = async (page = 1) => {
  const body = await cloudscraper.get(URL.RECENT_RELEASE);
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main_body div.last_episodes ul.items li').each(
    (_, element) => {
      const $el = $(element);
      const slug = $el
        .find('p.name a')
        .attr('href')
        .replace(/-episode-[0-9]+/g, '')
        .slice(1);
      promises.push(getAnime(slug));
    },
  );

  return {
    items: await Promise.all(promises),
    pages: {
      current: page,
    },
  };
};
