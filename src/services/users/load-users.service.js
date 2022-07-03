const {loadUsersRepository} = require ("../../repositories/user-repository");

async function loadAllUsers() {
  /*
  - TODO 27: Deve retornar a lista (com itens ou vazia) de usuários válidos;
*/
  const usersList = await loadUsersRepository();

  usersList.forEach((userData) => {
    if (!userData.status) userData["status"] = true;
  })

  return usersList;
}

module.exports = { loadAllUsers };
