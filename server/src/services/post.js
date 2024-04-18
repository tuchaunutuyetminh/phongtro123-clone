import db from '../models'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag']},
                {model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo']},
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

export const getPostsLimitService = (page) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAndCountAll({
            raw: true,
            nest: true,
            offset: page*5 || 0,
            limit: 5,
            include: [
                {model: db.Image, as: 'images', attributes: ['image']},
                {model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag']},
                {model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo']},
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
