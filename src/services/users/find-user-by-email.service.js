const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserByEmail(email) {


const usersRepository = await loadUsersRepository()

const user = usersRepository.find((obj) => obj.email === email)
if (user == null) return false;

return user;
}

module.exports = { findUserByEmail };
