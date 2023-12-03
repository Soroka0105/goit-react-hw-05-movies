import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=eb37bb0354bcfe3066179edc2e5626a4';

export const getMovieWithSearch = async query => {
  const { data } = await axios(`/search/movie?query=${query}&${API_KEY}`);
  return data;
};

export const getSingleMovie = async id => {
  const { data } = await axios(`movie/${id}?${API_KEY}`);
  return data;
};

export const getTrendingMovies = async query => {
  const { data } = await axios(`/trending/all/day?${API_KEY}`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios(`/movie/${id}/reviews?${API_KEY}`);
  return data;
};
export const getMovieCast = async id => {
  const { data } = await axios(`/movie/${id}/credits?${API_KEY}`);
  return data;
};
