import express from 'express'
import { getCourse, getCourses } from '../controllers/courseControllers.js'

const router = express.Router({
  mergeParams: true,
})

router.route('/').get(getCourses)
router.route('/:id').get(getCourse)

export default router
