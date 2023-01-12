import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body
  const user = await User.create({
    name,
    email,
    password,
    role,
  })

  const token = user.getSignedJwtToken()

  res.status(201).json({
    success: true,
    token: token,
    data: user,
  })
})

export { register }
