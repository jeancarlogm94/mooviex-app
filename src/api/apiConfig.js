const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '8dfa7a5a1079704453ef86ee56161ca3',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
