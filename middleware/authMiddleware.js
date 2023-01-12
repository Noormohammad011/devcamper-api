import User from '../models/userModel.js'
import { expressjwt as jwt } from 'express-jwt'
import dotenv from 'dotenv'
dotenv.config()

const protect = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
})


// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    User.findById(req.auth.id).exec((err, user) => {
      if (err || !user) {
        res.status(400).json({
          error: `User not found with that ${user._id} `,
        })
      }
      if (!roles.includes(user.role)) {
        return res.status(403).json({
          error: `User role ${user.role} is not authorized to access this route`,
        })
      }
      next()
    })
  }
}

export { protect, authorize }
