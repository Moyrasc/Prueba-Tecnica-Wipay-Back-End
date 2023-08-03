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
    if (data.length === 0) {
      // Si no se encontró ningún usuario, devuelve un error 404
      res.status(404).send({ error: 'Usuario no encontrado' })
    } else {
      res.send(data)
    }
  } catch (error) {
    console.error(chalk.redBright('getUser: ' + error.sqlMessage))
    next(error)
  }
}
// Crear usuario
export const addUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const insertQuery = 'INSERT INTO users (email, password) VALUES (?, ?)'
    const selectQuery = 'SELECT * FROM users WHERE id = LAST_INSERT_ID()'
    // Inserta el nuevo usuario en la base de datos
    await dbQuery(insertQuery, [email, password])
    // Obtén el usuario recién creado
    const [user] = await dbQuery(selectQuery)
    res.send(user)
  } catch (error) {
    console.error(chalk.redBright('addUser: ' + error.sqlMessage))
    next(error)
  }
}

// Editar usuario
export const editUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const { email, password } = req.body
    const data = await dbQuery('UPDATE users SET email = ?, password = ?, modificate_user = DATE(NOW()) WHERE id = ?', [email, password, id])
    res.send(data)
  } catch (error) {
    console.error(chalk.redBright('editUser: ' + error.sqlMessage))
    next(error)
  }
}
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
