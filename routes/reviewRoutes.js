import express from 'express'
import advancedResults from '../middleware/advancedResults.js'
import { getReviews } from '../controllers/reviewControllers.js'
import Review from '../models/reviewModel.js'
const router = express.Router({
  mergeParams: true,
})

router.route('/').get(
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description',
  }),
  getReviews
)

export default router
