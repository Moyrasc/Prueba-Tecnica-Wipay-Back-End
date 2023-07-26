import express from 'express'
import { loginController } from '../controllers/loginController.js'

const routerLogin = express.Router()

routerLogin.post('/', loginController)

export default routerLogin
