import { where } from 'sequelize'
import db from '../models'
import {v4 as generateId} from 'uuid'
import generateCode from '../utils/generateCode'
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

export const createNewPostsService = (body, userId) => new Promise(async (resolve, reject) => {

    try {
        const attributesId = generateId()
        const imagesId = generateId()
        const overviewId = generateId()
        const labelCode = generateCode(body.label)
        await db.Attribute.create
        const response = await db.Post.create({
            id: generateId(),
            title: body.title,
            labelCode,
            address: body.address || null,
            attributesId,
            categoryCode: body.categoryCode,
            description: body.description || null,
            userId,
            overviewId,
            imagesId,
            areaCode: body.areaCode || null,
            priceCode: body.priceCode || null,
            provinceCode: body.provinceCode || null,
            priceNumber: body.priceNumber,
            areaNumber: body.areaNumber
        })
        await db.Attribute.create({
            id: attributesId,
            price: +body.priceNumber < 1 ? `${+body.priceNumber * Math.pow(10,6)} đồng/tháng` : `${body.priceNumber} triệu/tháng`,
            acreage: `${body.areaNumber} m2`,
            published: item?.header?.attributes?.published,
            hashtag: item?.header?.attributes?.hashtag,
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


