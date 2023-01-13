import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import xss from 'xss-clean'
import helmet from 'helmet'
import hpp from 'hpp'
// import rateLimit from 'express-rate-limit'
import * as dotenv from 'dotenv'
import connectDB from './config/db.js'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

//import router
import bootcampsRoutes from './routes/bootcampsRoutes.js'
import coursesRoutes from './routes/courseRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userAdminRoutes from './routes/adminUserRoutes.js'
import reviewsRoutes from './routes/reviewRoutes.js'

//import middlewares
import morgan from 'morgan'
import path from 'path'

//dotenv config
dotenv.config()
//express configuration
const app = express()

//conncet to database
connectDB()
//morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'))
}

// For parsing application/json
app.use(express.json())
app.use(cookieParser())
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// Enable cors
app.use(cors())

//file upload
app.use(fileUpload())

//sanitize data
app.use(mongoSanitize())

//set security headers
app.use(helmet())

//prevent xss attacks
app.use(xss())

//prevent http param pollution
app.use(hpp())

//rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100,
// })

// app.use(limiter)

//set static folder
app.use(express.static(path.join(path.dirname(''), 'public')))

//route mount
app.use('/api/v1/bootcamps', bootcampsRoutes)
app.use('/api/v1/courses', coursesRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userAdminRoutes)
app.use('/api/v1/reviews', reviewsRoutes)

//middleware for error handling
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    chalk.cyan.underline(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )
)
