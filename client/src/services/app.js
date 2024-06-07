import axios from '../utils/axios'
import axiosDefault from 'axios'
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

export const apiGetPublicProvinces = () => axiosDefault({
    url: 'https://vapi.vnappmob.com/api/province/',
    method: 'get',
})

export const apiGetPublicDistrict = (provinceId) => axiosDefault({
    url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
    method: 'get',
})





