import axios from '../utils/axios'

export const apiGetPrices = () => axios({
    url: 'price/all',
    method: 'get',
})

export const apiGetAreas = () => axios({
    url: 'area/all',
    method: 'get',
})

export const apiGetProvinces = () => axios({
    url: 'province/all',
    method: 'get',
})





