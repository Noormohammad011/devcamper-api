import asyncHandler from 'express-async-handler'
import Bootcamp from '../models/bootCampModel.js'
// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public

const getBootcamps = asyncHandler(async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find({})
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps })
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
})

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public

const getBootcamp = asyncHandler(async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)
    if (!bootcamp) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
})

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private

const createBootcamp = asyncHandler(async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
})

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private

const updateBootcamp = asyncHandler(async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!bootcamp) {
      res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
})

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private

const deleteBootcamp = asyncHandler(async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    if (!bootcamp) {
      res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
})

export {
  getBootcamps,
  getBootcamp,
  deleteBootcamp,
  createBootcamp,
  updateBootcamp,
}
