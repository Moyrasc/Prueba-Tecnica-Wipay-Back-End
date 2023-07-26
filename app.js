import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import passport from 'passport'
import routerLogin from './routes/login.js'
import routerUsers from './routes/users.js'
import './auth/auth.js'
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Empezando con el Back')
})
// Routes
app.use('/login', routerLogin)
app.use('/users', passport.authenticate('jwt', { session: false }), routerUsers)

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not Found'
  })
})
app.use((error, req, res, _next) => {
  res.status((error.httpStatus !== undefined) ? error.httpStatus : 500).send({
    status: 'error',
    message: error.message
  })
})
export default app
