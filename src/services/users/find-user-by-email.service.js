const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserByEmail(email) {
  /*
  - TODO 23: Deve retornar FALSE se o usuário com o email passado nao existir;
  - TODO 24: Deve retornar um usuário válido se ele existir no banco;
*/

const usersRepository = await loadUsersRepository()

const user = usersRepository.filter((obj) => obj.email == email)
if (user[0] == null) return false;

return user[0]
}

module.exports = { findUserByEmail };
