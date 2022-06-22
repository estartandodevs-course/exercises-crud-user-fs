const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserById(id) {


const usersRepository = await loadUsersRepository()

const user = usersRepository.find((obj) => obj.id == id)
if (user == null) return null;

return user;
}

module.exports = { findUserById };
