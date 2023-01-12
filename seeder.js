import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'
import Bootcamp from './models/bootCampModel.js'
import Course from './models/courseModel.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import bootcamps from './data/bootcamps.js'
import courses from './data/courses.js'
import users from './data/users.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Bootcamp.deleteMany()
    await Course.deleteMany()
    await User.deleteMany()
    await Course.insertMany(courses)
    await Bootcamp.insertMany(bootcamps)
    await User.insertMany(users)

    console.log(chalk.bgBlackBright.underline('Data Imported!'))
    process.exit()
  } catch (error) {
    console.error(chalk.red.inverse(`${error}`))
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Bootcamp.deleteMany()
    await Course.deleteMany()
    await User.deleteMany()
    console.log(chalk.red.inverse('Data Destroyed!'))
    process.exit()
  } catch (error) {
    console.error(chalk.red.inverse(`${error}`))
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
