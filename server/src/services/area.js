import db from '../models'

//GET ALL CATEGORY 

export const getAreasService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Area.findAll({
            raw: true,
            attributes: ['code', 'value', 'order']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Success' : 'Failed to get area.',
            response
        })
    } catch (error) {
        reject()
    }
})