import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routerLogin from './routes/login'
const app = express()

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Empezando con el Back')
})
// Routes
app.use('login', routerLogin)

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not Found'
  })
})
export default app
