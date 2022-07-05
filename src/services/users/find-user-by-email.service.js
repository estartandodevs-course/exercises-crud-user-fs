const { loadUsersRepository } = require('../../repositories/user-repository.js')

async function findUserByEmail(email) {
  const allUsers = await loadUsersRepository()
  const userByEmail = allUsers.find((user) => user.email === email)

  return (userByEmail === undefined) ? false : {
    name: userByEmail.name,
    email: userByEmail.email,
    phone: userByEmail.phone
  }
}

module.exports = { findUserByEmail };

