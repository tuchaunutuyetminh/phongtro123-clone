import { where } from 'sequelize'
import db from '../models'
const {Op} = require('sequelize')
export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Ok' : 'Lấy bài đăng bị lỗi.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getPostsLimitService = (page, query, {priceNumber, areaNumber}) => new Promise(async (resolve, reject) => {
    
    try {
        let offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const queries = {...query}
        if (priceNumber) queries.priceNumber = {[Op.between]: priceNumber}
        if (areaNumber) queries.areaNumber = {[Op.between]: areaNumber}

        const response = await db.Post.findAndCountAll({
            where: queries,
            raw: true,
            nest: true,
            offset: offset * 5,
            limit: 5,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Ok' : 'Lấy bài đăng bị lỗi.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getNewPostsService = () => new Promise(async (resolve, reject) => {

    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            offset: 0,
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 5,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
            ],
            attributes: ['id', 'title', 'star', 'createdAt']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Ok' : 'Lấy bài đăng bị lỗi.',
            response
        })
    } catch (error) {
        reject(error)
    }
})
