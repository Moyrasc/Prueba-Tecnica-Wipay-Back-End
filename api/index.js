import app from '../app.js'
import 'dotenv/config'
import chalk from 'chalk'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`🚀 Server running on ${chalk.bold.bgGreen(`http://localhost:${port}`)}`)
})
