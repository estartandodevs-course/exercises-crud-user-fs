const {loadUsersRepository} = require("../../repositories/user-repository");

async function searchUsers(name) {

  /*
  - 28: Deve retornar a lista de usuários válidos filtrado por nome;
*/
const users = loadUsersRepository();
return users.filter((user)=>{
 return user.name === name;
})
}

module.exports = { searchUsers };
