import express from 'express'
import { addUser, deleteUser, editUser, getAllUsers, getUser } from '../controllers/usersController.js'

const routerUsers = express.Router()

routerUsers.get('/', getAllUsers)
routerUsers.get('/:id', getUser)
routerUsers.post('/', addUser)
routerUsers.put('/:id', editUser)
routerUsers.delete('/:id', deleteUser)

export default routerUsers
