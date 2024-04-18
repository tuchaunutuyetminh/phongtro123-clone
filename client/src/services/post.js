import axios from '../utils/axios'

export const apiGetPosts = () => axios({
    url: 'post/all',
    method: 'get',
})
export const apiGetPostsLimit = (page) => axios({
    url: `post/limit?page=${page}`,
    method: 'get',
})



