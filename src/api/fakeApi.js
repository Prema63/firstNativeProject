// const BASE_URL = 'https://fakestoreapi.com';

// export const getProducts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/products`);
//     return await response.json();
//   } catch (error) {
//     console.error('API Error:', error);
//     return [];
//   }
// };


import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);

        if (response.status === 200) {
            return response.data;
        }

        return [];

    } catch (error) {
        if (error.response) {
            const { status } = error.response;

            switch (status) {
                case 400:
                    console.error('Bad Request (400)');
                    break;
                case 401:
                    console.error('Unauthorized (401)');
                    break;
                case 403:
                    console.error('Forbidden (403)');
                    break;
                case 404:
                    console.error('Not Found (404)');
                    break;
                case 500:
                    console.error('Internal Server Error (500)');
                    break;
                default:
                    console.error(`HTTP Error (${status})`);
            }
        }
        else {
            console.error('Network Error');
        }

        return [];
    }
};