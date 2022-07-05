const { loadUsersRepository } = require('../../repositories/user-repository.js')

async function findUserById(id) {
  const allUsers = await loadUsersRepository()
  const userById = allUsers.find((user) => user.id === id)

  return (userById === undefined) ? null : {
    name: userById.name,
    email: userById.email,
    phone: userById.phone
  }

  /*
  - TODO 25: Deve retornar NULL se o usuário com o email passado nao existir;
  - TODO 26: Deve retornar um usuário válido se ele existir nno banco; 
*/
}

module.exports = { findUserById };
