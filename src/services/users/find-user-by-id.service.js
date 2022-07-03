const {loadUsersRepository} = require ("../../repositories/user-repository");

async function findUserById(id) {
  /*
  - TODO 25: Deve retornar NULL se o usuário com o id passado nao existir;
  - TODO 26: Deve retornar um usuário válido se ele existir nno banco; 
*/
  const usersList = await loadUsersRepository();

  let userData = usersList.filter(data =>
    parseInt(data.id) === id
  );

  return (JSON.stringify(userData) === '[]') ? null : userData[0];
}

module.exports = { findUserById };
