// import User from '../models/userModel.js'
import { expressjwt as jwt } from 'express-jwt'
import dotenv from 'dotenv'
dotenv.config()

const protect = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
})




export { protect }