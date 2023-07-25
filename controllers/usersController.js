import { dbQuery } from '../database/db.js'
import chalk from 'chalk'
// Traer todos los usuarios
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await dbQuery('SELECT * FROM USERS')
    res.send(data)
  } catch (error) {
    console.error(chalk.redBright('getAllUsers: ' + error.sqlMessage))
    next(error)
  }
}
// Traer solo un usuario
// Editar usuario
// Eliminar usuario
