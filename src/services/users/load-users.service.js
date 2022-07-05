const {loadUsersRepository} = require('../../repositories/user-repository.js')

async function loadAllUsers() {

  const users = await loadUsersRepository()
  const validUsers = users.map((user) => {
    users[0]. status == true
  })
  return validUsers

  


  /*
  - TODO 27: Deve retornar a lista (com itens ou vazia) de usuários válidos;
*/
}

module.exports = { loadAllUsers };
