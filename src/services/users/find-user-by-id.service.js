const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserById(id) {


const usersRepository = await loadUsersRepository()

const user = usersRepository.filter((obj) => obj.id == id)
if (user[0] == null) return null;

return user[0]
}

module.exports = { findUserById };
