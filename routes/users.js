import express from 'express'
import { addUser, deleteUser, getAllUsers, getUser } from '../controllers/usersController.js'

const routerUsers = express.Router()

routerUsers.get('/', getAllUsers)
routerUsers.get('/:id', getUser)
routerUsers.post('/', addUser)
routerUsers.delete('/:id', deleteUser)

export default routerUsers
