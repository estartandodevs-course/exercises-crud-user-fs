const {loadUsersRepository} = require ("../../repositories/user-repository");

async function searchUsers(name) {
  /*
  - TODO 28: Deve retornar a lista de usuários válidos filtrado por nome;
*/
  const usersList = await loadUsersRepository();

  let userListFilterByName = usersList.filter(data => 
    data.name.toString() === name
  );

  return userListFilterByName;
}

module.exports = { searchUsers };
