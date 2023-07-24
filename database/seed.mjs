import { faker } from '@faker-js/faker';
import connection from './db.mjs';

const removeTable = () => {
  console.log('🗑 Delete old table... 🗑')
  connection.query('drop table if exists users')
  console.log('Tables deleted ✅')
}
const createTableDB = () => {
  console.log('Create new Table ')
  connection.query(`
    create table users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email CHAR(255) NOT NULL UNIQUE,
    password CHAR(255) NOT NULL,
    create_user DATE DEFAULT DATE(NOW()),
    modificate_user DATE DEFAULT DATE(NOW())

  )
  `)
}
const createUsersFake = async () => {
  for (let i = 0; i < 100; i++) {
    const email = faker.internet.email()
    const password = faker.internet.password()
    connection.query(`
      insert into users 
      ( email, password)
      values
      (?)
    `, [[email, password]])
  }
}
removeTable()
createTableDB()
createUsersFake()

connection.end()