
const { loadUsersRepository } = require('../../repositories/user-repository')

async function loadAllUsers() {
  const users = await loadUsersRepository();  
  return users.map((user) => ({...user, status:true}))  
}
// loadAllUsers()

module.exports = { loadAllUsers };
