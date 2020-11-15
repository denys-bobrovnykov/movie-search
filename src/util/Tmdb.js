const key = '8d2f03d4003f31228a79eb066d35a5d8';

const baseUrl = 'https://api.themoviedb.org/3';
// const trending = baseUrl + '/trending/all/day?api_key=' + key;
// const popularMovie = baseUrl + `/movie/popular?api_key=${key}&language=en-US&page=1`;
// const popularTV = baseUrl + `/tv/popular?api_key=${key}&language=en-US&page=1`;

export const Urls = {
  trending: baseUrl + '/trending/all/day?api_key=' + key,
  popularMovie: baseUrl + `/movie/popular?api_key=${key}&language=en-US&page=1`,
  popularTV: baseUrl + `/tv/popular?api_key=${key}&language=en-US&page=1`,
  backdrop: 'https://image.tmdb.org/t/p/w780',
  poster: 'https://image.tmdb.org/t/p/w500',
};

export const baseUrls = {
  backdrop: 'https://image.tmdb.org/t/p/w780',
  poster: 'https://image.tmdb.org/t/p/w500',
};

export const searchCategories = [
  {
    id: '1',
    name: 'Movies',
    mediaType: 'movie',
  },
  {
    id: '2',
    name: 'TV Shows',
    mediaType: 'tv',
  },
];

const getData = async (url) => {
  try {
    const request = await fetch(url);
    const result = await request.json();
    console.log('request: ', request);
    console.log('result: ', result);
    return result;
  } catch (err) {
    return err.message;
  }
};

export const tmdb = {
  async getPopular(type = 'movie') {
    let url = '';
    if (type === 'tv') {
      url = Urls.popularTV;
    }
    if (type === 'movie') {
      url = Urls.popularMovie;
    }
    const result = await getData(url);
    return result.results;
  },

  async getTrending() {
    const result = await getData(Urls.trending);
    return result.results;
  },

  async getDetails(type, id) {
    const url = baseUrl + `/${type}/${id}?api_key=${key}&language=en-US&page=1`;
    const result = await getData(url);
    return result;
  },

  async search(media = 'tv', query, page) {
    const url =
      baseUrl + `/search/${media}?api_key=${key}&query=${query}&page=${page}&include_adult=false`;
    const result = await getData(url);
    return result;
  },
};
