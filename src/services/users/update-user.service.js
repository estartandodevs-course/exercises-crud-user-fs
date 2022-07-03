const {loadUsersRepository} = require ("../../repositories/user-repository");
const {updateUserRepository} = require ("../../repositories/user-repository");

async function updateUser(id, { name, email, phone }) {
  /*
  - TODO 29: Deve retornar uma exceção de erro "User ID is required" caso não tenha passado ID;
  - TODO 30: Se pelo ID passado não existir um usuário no banco, deve retornar uma exceção com o erro "User not exists";
  - TODO 31: Deve retornar TRUE se o usuário for atualizado corretamente;   
*/
  if (!id) throw new Error("User ID is required");

  let usersList = await loadUsersRepository();
  let userIDCount = 0;

  usersList.forEach((userData) => {
    if (parseInt(userData.id) === id) {
      updateUserRepository(id, { name, email, phone });
      userIDCount++;
    }
  });

  if (userIDCount === 0) throw new Error("User not exists");

  return true;
}

module.exports = { updateUser };
