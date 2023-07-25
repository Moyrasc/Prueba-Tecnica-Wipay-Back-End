import express from 'express'
import { deleteUser, getAllUsers, getUser } from '../controllers/usersController.js'

const routerUsers = express.Router()

routerUsers.get('/', getAllUsers)
routerUsers.get('/:id', getUser)
routerUsers.delete('/:id', deleteUser)

export default routerUsers
