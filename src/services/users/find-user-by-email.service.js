const { loadUsersRepository } = require('../../repositories/user-repository.js')

async function findUserByEmail(email) {
  const allUsers = await loadUsersRepository()
  const user = allUsers.find((userObj) => userObj.email === email)

  return (user === undefined) ? false : {
    name: user.name,
    email: user.email,
    phone: user.phone
  }

}

module.exports = { findUserByEmail };
