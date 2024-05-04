import axios from '../utils/axios'

export const apiGetCurrent = () => axios({
    url: 'user/get-current',
    method: 'get',
})


