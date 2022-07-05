const { createUserRepository } = require("../../repositories/user-repository.js")
const { loadUsersRepository } = require("../../repositories/user-repository.js")
const { findUserByEmail } = require("../users/find-user-by-email.service.js")
const { encryptPassword } = require('../../utils/encrypt-password.js')

async function createUser({ name, email, password, phone }) {
  const users = await loadUsersRepository()

  if (!name || !email || !password) throw new Error("Name, Email, Password are required")

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: encryptPassword(password),
    phone: phone,
    status: true
  }

  if (await findUserByEmail(email) === false) {
    createUserRepository(newUser)
    return newUser
  }
  else {
    throw new Error('User already exists')
  }
}


module.exports = { createUser };
