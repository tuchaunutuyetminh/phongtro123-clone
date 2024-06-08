import express from 'express'
import * as postController from '../controllers/post'
import verifyToken from '../middlewares/verifyToken'


const router = express.Router()
router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/new-posts', postController.getNewPosts)

router.post('/create-new',verifyToken, postController.createNewPost)

export default router