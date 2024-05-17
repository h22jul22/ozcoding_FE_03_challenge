import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
        lang: 'ko',
    },
});

export default instance;
