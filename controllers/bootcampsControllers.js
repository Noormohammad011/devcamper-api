import asyncHandler from 'express-async-handler'

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public

const getBootcamps = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })
})

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public

const getBootcamp = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` })
})

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private

const createBootcamp = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
})

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private

const updateBootcamp = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` })
})

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private

const deleteBootcamp = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
})

export {
  getBootcamps,
  getBootcamp,
  deleteBootcamp,
  createBootcamp,
  updateBootcamp,
}
