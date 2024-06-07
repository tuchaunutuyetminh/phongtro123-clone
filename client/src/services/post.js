import axios from 'axios'
import axiosConfig from '../utils/axios'

export const apiGetPosts = () => axiosConfig({
    url: 'post/all',
    method: 'get',
})
export const apiGetPostsLimit = (data) => axiosConfig({
    url: `post/limit`,
    method: 'get',
    params: data
})

export const apiGetNewPosts = () => axiosConfig({
    url: `post/new-posts`,
    method: 'get',
})

export const apiUploadImages = (images) => axios({
    url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
    method: 'post',
    data: images
})




