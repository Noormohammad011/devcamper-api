
import expressAsyncHandler from "express-async-handler"
import Review from "../models/reviewModel.js"
import ErrorResponse from '../utils.js/errorResponse.js'
import Bootcamp from '../models/bootCampModel.js'

// @desc      Get reviews
// @route     GET /api/v1/reviews
// @route     GET /api/v1/bootcamps/:bootcampId/reviews
// @access    Public
const getReviews = expressAsyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    const reviews = await Review.find({ bootcamp: req.params.bootcampId })

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    })
  } else {
    res.status(200).json(res.advancedResults)
  }
})

export { getReviews }
