import { dbQuery } from '../database/db.js'
import chalk from 'chalk'
// Traer todos los usuarios
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await dbQuery('SELECT * FROM users')
    res.send(data)
  } catch (error) {
    console.error(chalk.redBright('getAllUsers: ' + error.sqlMessage))
    next(error)
  }
}
// Traer solo un usuario
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await dbQuery('SELECT * FROM users WHERE id = ?', [id])
    res.send(data)
  } catch (error) {
    console.error(chalk.redBright('getUser: ' + error.sqlMessage))
    next(error)
  }
}
// Crear usuario
export const addUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const data = await dbQuery('INSERT INTO users (email,password) VALUES (?,?)', [email, password])
    res.send(data)
  } catch (error) {
    console.error(chalk.redBright('addUser: ' + error.sqlMessage))
    next(error)
  }
}
// Editar usuario
// Eliminar usuario
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await dbQuery('DELETE  FROM users WHERE id = ?', [id])
    res.send(data)
  } catch (error) {
    console.error(chalk.redBright('deleteUser: ' + error.sqlMessage))
    next(error)
  }
}
