const {
  SEASONS,
  MINIMUM_YEAR,
  MAXIMUM_YEAR,
} = require('./config/constants');
const {
  getAnimeByGenre,
  getAnimeBySeason,
  getGenres,
  getMovies,
  getOngoingSeries,
  getPopularAnimes,
  getRecentlyAddedSeries,
  getRecentlyUpdated,
  searchAnime,
  getAnime,
  getEpisode
} = require('./lib/scraper');

class Anime {
  async fetchGenres() {
    try {
      return await getGenres();
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchRecentlyUpdated(page = 1) {
    try {
      return await getRecentlyUpdated(page);
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchAnimeByGenre(genre, page = 1) {
    try {
      const genres = await this.fetchGenres();
      if (genres.items.indexOf(genre) === -1) {
        throw new Error('Genre is not supported.');
      }

      return await getAnimeByGenre(genre, page);
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchAnimeBySeason(season, year, page = 1) {
    try {
      if (SEASONS.indexOf(season.toLowerCase()) === -1) {
        throw new Error(
          'Please enter a correct value for the season.',
        );
      }

      if (MAXIMUM_YEAR < year || MINIMUM_YEAR > year) {
        throw new Error(
          `Please enter a year between ${MINIMUM_YEAR} and ${MAXIMUM_YEAR}`,
        );
      }

      return await getAnimeBySeason(season, year, page);
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchMovies(page = 1) {
    try {
      return await getMovies(page);
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchOngoingSeries() {
    try {
      return await getOngoingSeries();
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchPopularAnimes(page = 1) {
    try {
      return await getPopularAnimes(page);
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchRecentlyAddedSeries() {
    try {
      return await getRecentlyAddedSeries();
    } catch (err) {
      throw new Error(err);
    }
  }

  async fetchRelatedAnime(keyword, page = 1) {
    try {
      return await searchAnime(keyword, page);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAnime(slug) {
    try {
      return await getAnime(slug);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getEpisode(slug, episode = 1) {
    try {
      return await getEpisode(slug, episode);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new Anime();
