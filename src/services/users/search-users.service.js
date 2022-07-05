const { loadUsersRepository } = require('../../repositories/user-repository.js')

async function searchUsers(name) {
  const users = await loadUsersRepository()
  const usersByName = []
  
  users.forEach((user) => {
    if (user.name == name) {
      usersByName.push(user)
    }
  })
  return usersByName
}

module.exports = { searchUsers };
