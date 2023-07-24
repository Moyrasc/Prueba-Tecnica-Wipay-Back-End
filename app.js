import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Empezando con el Back')
})

export default app
