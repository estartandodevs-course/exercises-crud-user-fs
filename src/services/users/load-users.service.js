const { loadUsersRepository } = require("../../repositories/user-repository");

async function loadAllUsers() {
  /*
  - 27: Deve retornar a lista (com itens ou vazia) de usuários válidos;
*/
const users = loadUsersRepository();
return users.map((user)=>{
 return{
  ...user,
  status: true
 }
})

}

module.exports = { loadAllUsers };
