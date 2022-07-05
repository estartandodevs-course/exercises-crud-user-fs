const { loadUsersRepository } = require('../../repositories/user-repository.js')

async function loadAllUsers() {
  const users = await loadUsersRepository()
  const validUsers = []

  users.forEach((user) => {
    if (!user.status) {
      user['status'] = true
      validUsers.push(user)
    }
    else if (user.status === true) {
      validUsers.push(user)
    }
  })
  return validUsers
}

module.exports = { loadAllUsers };
