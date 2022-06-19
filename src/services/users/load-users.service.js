
const { loadUsersRepository } = require('../../repositories/user-repository')

async function loadAllUsers() {
  const users = await loadUsersRepository();  
  const usersList = users.map((user) => ({...user, status:true}))

  
  return usersList;

}
// loadAllUsers()

module.exports = { loadAllUsers };
