import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '428840d8230e52d43fbf2e2bfafe8f20',
        language: 'ko-KR',
    },
});

export default instance;
