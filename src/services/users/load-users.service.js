
const { loadUsersRepository } = require('../../repositories/user-repository')

async function loadAllUsers() {
  /*
  - TODO 27: Deve retornar a lista (com itens ou vazia) de usuários válidos;
*/

return loadUsersRepository()
}

module.exports = { loadAllUsers };
