exports.parseAnime = ($) => {
  const animeInfo = $('div.anime_info_body div.anime_info_body_bg');
  const poster = animeInfo.find('img').attr('src');
  const title = animeInfo.find('h1').text();
  const details = animeInfo.find('p.type');
  const type = $(details.get(0)).find('a').attr('title');
  const plot = $(details.get(1))
    .find('span:contains("Plot Summary:")')
    .get(0).next;
  const genres = $(details.get(2))
    .find('span:contains("Genre:")')
    .parent()
    .find('a')
    .map((_, element) => $(element).attr('title'))
    .get();
  const released = $(details.get(3))
    .find('span:contains("Released:")')
    .get(0).next;
  const status = $(details.get(4))
    .find('span:contains("Status:")')
    .get(0).next;

  const synonyms = $(details.get(5))
    .find('span:contains("Other name:")')
    .get(0).next;

  const videoInfo = $('div.anime_video_body');
  const episodesList = videoInfo.find('ul#episode_page li');
  const episodes = $(episodesList.get(episodesList.length - 1))
    .find('a')
    .attr('ep_end');

  return {
    poster,
    title,
    synonyms:
      synonyms && synonyms.data ? synonyms.data.split(', ') : [],
    type,
    plot: plot && plot.data ? plot.data : '',
    genres,
    released:
      released && released.data ? parseInt(released.data, 10) : '',
    status: status && status.data ? status.data : '',
    episodes: parseInt(episodes, 10),
  };
};

exports.parseChooseServer = (el) => {
  return el.text().trim().replace('Choose this server', '');
}