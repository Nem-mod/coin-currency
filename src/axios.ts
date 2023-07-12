import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: 'https://api.coinranking.com/v2',
})

instance.interceptors.request.use((config:AxiosRequestConfig) => {
    if (config.headers)
        config.headers['x-access-token'] = 'coinranking2fc030fdc34d6e88420e2145451a34b14e157d639d1a2967';
    return config;
})
export default instance;