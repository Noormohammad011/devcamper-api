import express from 'express'
import Bootcamp from '../models/bootCampModel.js'
//middleware
import advancedResults from '../middleware/advancedResults.js'
import {
  bootcampPhotoUpload,
  createBootcamp,
  deleteBootcamp,
  getBootcamp,
  getBootcamps,
  getBootcampsInRadius,
  updateBootcamp,
} from '../controllers/bootcampsControllers.js'

// Include other resource routers
import courseRouter from './courseRoutes.js'
import reviewRouter from './reviewRoutes.js'
import { authorize, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter)
router.use('/:bootcampId/reviews', reviewRouter)

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

//upload photo
router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload)
router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
  .post(protect, authorize('publisher', 'admin'), createBootcamp)
router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, authorize('publisher', 'admin'), updateBootcamp)
  .delete(protect, authorize('publisher', 'admin'), deleteBootcamp)

export default router
