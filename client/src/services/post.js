import axios from '../utils/axios'

export const apiGetPosts = () => axios({
    url: 'post/all',
    method: 'get',
})


