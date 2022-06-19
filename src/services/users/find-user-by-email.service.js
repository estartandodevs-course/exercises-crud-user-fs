const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserByEmail(email) {


const usersRepository = await loadUsersRepository()

const user = usersRepository.filter((obj) => obj.email == email)
if (user[0] == null) return false;

return user[0]
}

module.exports = { findUserByEmail };
