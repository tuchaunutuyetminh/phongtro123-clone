import axios from "axios";

const instance = axios.create({
    baseURL: process.env.SERVER_URL || 'http://localhost:5000/api/v1/auth/'
});


//Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //gắn token vào header
    let localStorageData = window.localStorage.getItem('persist:auth')
    if(localStorageData && typeof localStorageData === 'string') {
        localStorageData = JSON.parse(localStorageData)
        const accessToken = JSON.parse(localStorageData?.token)
        console.log(accessToken)
        // config.headers = { authorization: `Bearer ${accessToken}`}
        return config
    } else return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //viết refresh token
    
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response.data;
});

export default instance