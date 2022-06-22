
const { loadUsersRepository } = require('../../repositories/user-repository')

async function searchUsers(name) {

const usersRepository = await loadUsersRepository()

const user = usersRepository.filter((obj) => obj.name === name)

return user;
}

module.exports = { searchUsers };
