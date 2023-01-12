import express from 'express'
import {
  addCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} from '../controllers/courseControllers.js'
import advancedResults from '../middleware/advancedResults.js'
import Course from '../models/courseModel.js'
import { authorize, protect } from '../middleware/authMiddleware.js'

const router = express.Router({
  mergeParams: true,
})

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(protect, authorize('publisher', 'admin'), addCourse)
router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse)

export default router
