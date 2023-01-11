import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
//import router
// import taskRoutes from './routes/taskRoutes.js'

//import middlewares
import morgan from 'morgan'

//express configuration
const app = express()
dotenv.config()

//conncet to database
connectDB()
//morgan
app.use(morgan('tiny'))

// For parsing application/json
app.use(express.json())

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// Enable cors
app.use(cors())

//route configaration
// app.use('/api/v1/tasks', taskRoutes)

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
