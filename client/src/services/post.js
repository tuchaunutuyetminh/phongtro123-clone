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

export const apiGetNewPosts = () => axios({
    url: `post/new-posts`,
    method: 'get',
})



