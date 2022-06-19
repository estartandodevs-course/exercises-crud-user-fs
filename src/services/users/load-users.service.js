
const { loadUsersRepository } = require('../../repositories/user-repository')

async function loadAllUsers() {
  /*
  - TODO 27: Deve retornar a lista (com itens ou vazia) de usuários válidos;
*/

  const users = await loadUsersRepository();  
  const usersList = users.map((user) => ({...user, status:true}))

  
  return usersList;

}
// loadAllUsers()

module.exports = { loadAllUsers };
