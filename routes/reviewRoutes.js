import express from 'express'
import advancedResults from '../middleware/advancedResults.js'
import { addReview, getReview, getReviews } from '../controllers/reviewControllers.js'
import Review from '../models/reviewModel.js'
import { authorize, protect } from '../middleware/authMiddleware.js'


const router = express.Router({
  mergeParams: true,
})

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )
  .post(protect, authorize('user', 'admin'), addReview)
router.route('/:id').get(getReview)

export default router
