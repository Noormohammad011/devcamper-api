import express from 'express'
import { forgotPassword, getMe, login, register, resetPassword } from '../controllers/authControllers.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/me').get(protect, getMe)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:resettoken').put(resetPassword)

export default router
