/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */

import axios from 'axios';

// Callbacks
export const callback = (callback) => setTimeout(() => callback('Hola mundo callback'), 3000);

// Promesas
export const axiosGet = (url) => new Promise((resolve, reject) => {
  axios.get(url)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error.message));
});
