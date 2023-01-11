import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'
import Bootcamp from './models/bootCampModel.js'
import connectDB from './config/db.js'
import bootcamps from './data/bootcamps.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Bootcamp.deleteMany()
    await Bootcamp.insertMany(bootcamps)

    console.log(chalk.bgBlackBright.underline('Data Imported!'))
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Bootcamp.deleteMany()
    console.log(chalk.red.inverse('Data Destroyed!'))
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
