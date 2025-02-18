// import axios from 'axios';

// const ACCESS_KEY = 'aoijLXA1KGzoMKMJ5M3TNHR_79Pjcu6ivDc9hYTB_Es';

// axios.defaults.headers = {
//   Authorization: `Client-ID ${ACCESS_KEY}`,
// };

// export const fetchPhotos = async (query, page, perPage) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}`
//   );
//   return response.data;
// };

import axios from 'axios';

const ACCESS_KEY = 'aoijLXA1KGzoMKMJ5M3TNHR_79Pjcu6ivDc9hYTB_Es';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common['Accept-Version'] = 'v1';

export const fetchPhotos = async (query, page, perPage) => {
  return axios.get(
    `/search/photos?page=${page}&per_page=${perPage}&query=${query}`
  );
};

// import axios from 'axios';

// const ACCESS_KEY = 'aoijLXA1KGzoMKMJ5M3TNHR_79Pjcu6ivDc9hYTB_Es';

// axios.defaults.baseURL = 'https://api.unsplash.com';
// axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
// axios.defaults.headers.common['Accept-Version'] = 'v1';

// export const fetchPhotos = async (query, page, perPage) => {
//   return axios.get(
//     `/search/photos?page=${page}&per_page=${perPage}&query=${query}`
//   );
// };
