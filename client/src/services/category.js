import axios from '../utils/axios'

export const apiGetCategories = () => axios({
    url: 'category/all',
    method: 'get',
})


