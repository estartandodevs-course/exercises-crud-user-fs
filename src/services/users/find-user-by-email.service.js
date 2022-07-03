const {loadUsersRepository} = require ("../../repositories/user-repository");

async function findUserByEmail(email) {
  /*
  - TODO 23: Deve retornar FALSE se o usuário com o email passado nao existir;
  - TODO 24: Deve retornar um usuário válido se ele existir no banco;
*/
  const usersList = await loadUsersRepository();

  let userData = usersList.filter(data =>
    data.email.toString() === email
  );

  return (JSON.stringify(userData) === '[]') ? false : userData[0];
}

module.exports = { findUserByEmail };
