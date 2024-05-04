import express from 'express'
import * as controllers from '../controllers/user'
import verifyToken from '../middlewares/verifyToken'
const router = express.Router()

router.get('/get-current',verifyToken, controllers.getCurrent)

export default router