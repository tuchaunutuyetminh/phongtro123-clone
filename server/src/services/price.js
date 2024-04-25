import db from '../models'

//GET ALL CATEGORY 

export const getPricesService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Price.findAll({
            raw: true,
            attributes: ['code', 'value', 'order']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Success' : 'Failed to get price.',
            response
        })
    } catch (error) {
        reject()
    }
})