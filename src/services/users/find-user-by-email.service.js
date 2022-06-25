const { loadUsersRepository } = require("../../repositories/user-repository");

async function findUserByEmail(email) {
  /*
  - 23: Deve retornar FALSE se o usuário com o email passado nao existir;
  - 24: Deve retornar um usuário válido se ele existir no banco;
*/

const users = loadUsersRepository();
const Exist = users.find((user) => {
  return user.email === email;
})
if(!Exist){
  return false;
}
  return Exist;
}

module.exports = { findUserByEmail };
