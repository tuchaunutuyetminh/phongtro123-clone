import db from '../models'

//GET ALL CATEGORY 

export const getProvinceService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Province.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Success' : 'Failed to get province.',
            response
        })
    } catch (error) {
        reject()
    }
})