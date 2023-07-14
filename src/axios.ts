import axios, {AxiosRequestConfig} from "axios";

const coinApiInstance = axios.create({
    baseURL: 'https://api.coinranking.com/v2',
})

coinApiInstance.interceptors.request.use((config:AxiosRequestConfig) => {
    if (config.headers)
        config.headers['x-access-token'] = 'coinranking2fc030fdc34d6e88420e2145451a34b14e157d639d1a2967';
    return config;
})


const bingApiInstance = axios.create({
    baseURL: 'https://bing-news-search1.p.rapidapi.com',

})

bingApiInstance.interceptors.request.use((config:AxiosRequestConfig) => {
    config = {
        ...config,
        ...{
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': 'ff732506f4mshc34d54e63f7dc58p19bd6ejsn4a0dcba035ea',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        }
    }
    return config;
})




export const axiosCoinApi = coinApiInstance;
export const axiosBingApi = bingApiInstance;