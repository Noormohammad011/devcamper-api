import express from 'express'
import User from '../models/userModel.js'
//middleware
import advancedResults from '../middleware/advancedResults.js'
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/adminUserControllers.js'
import { authorize, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.use(protect)
router.use(authorize('admin'))

router.route('/').get(advancedResults(User), getUsers).post(createUser)

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)
export default router
