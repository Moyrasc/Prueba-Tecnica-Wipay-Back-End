import express from 'express'
import { getAllUsers } from '../controllers/usersController.js'

const routerUsers = express.Router()

routerUsers.get('/', getAllUsers)

export default routerUsers
