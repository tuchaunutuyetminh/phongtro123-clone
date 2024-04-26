import axios from '../utils/axios'

export const apiGetPosts = () => axios({
    url: 'post/all',
    method: 'get',
})
export const apiGetPostsLimit = (data) => axios({
    url: `post/limit`,
    method: 'get',
    params: data
})



