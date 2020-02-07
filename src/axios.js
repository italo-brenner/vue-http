import axios from 'axios'
import config from './config/config'

const instance = axios.create({})

instance.defaults.baseURL = config.apiURL

instance.interceptors.request.use(config => {
    console.log('Interceptando requisição: ', config)

    config.data = {
        ...config.data,
        curso: 'Vue JS'
    }

    config.headers.common['Authorization'] = `Bearer token_jwt`
    config.headers.put['Meu-Cabecalho'] = 'Curso VueJS'

    return config
}, error => {
    console.log('Erro ao fazer requisicao: ', error)
    return Promise.reject(error)
})

export default instance