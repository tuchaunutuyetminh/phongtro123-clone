import { where } from 'sequelize'
import db from '../models'

//GET CURRENT

export const getOne = (id) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: {id},
            raw: true,
            attributes: {
                exclude: ['password']
            }
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