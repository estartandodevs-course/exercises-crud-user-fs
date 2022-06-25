const { loadUsersRepository } = require("../../repositories/user-repository");

async function findUserById(id) {
  /*
  - 25: Deve retornar NULL se o usuário com o email passado nao existir;
  - 26: Deve retornar um usuário válido se ele existir nno banco; 
*/
const users = loadUsersRepository();
const Exist = users.find((user) => {
  return user.id === id;
})
if(!Exist){
  return null;
}
  return Exist;
}


module.exports = { findUserById };