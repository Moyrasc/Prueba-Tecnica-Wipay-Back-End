import express from 'express'
import { getAllUsers, getUser } from '../controllers/usersController.js'

const routerUsers = express.Router()

routerUsers.get('/', getAllUsers)
routerUsers.get('/:id', getUser)

export default routerUsers
