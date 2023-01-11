import express from 'express'
import { addCourse, getCourse, getCourses } from '../controllers/courseControllers.js'

const router = express.Router({
  mergeParams: true,
})

router.route('/').get(getCourses).post(addCourse)
router.route('/:id').get(getCourse)

export default router
