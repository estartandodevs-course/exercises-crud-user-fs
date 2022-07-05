const { loadUsersRepository } = require('../../repositories/user-repository.js')

async function findUserById(id) {
  const allUsers = await loadUsersRepository()
  const userById = allUsers.find((user) => user.id === id)

  return (userById === undefined) ? null : {
    name: userById.name,
    email: userById.email,
    phone: userById.phone
  }
}

module.exports = { findUserById };
