const {loadUsersRepository} = require ("../../repositories/user-repository");
const {deleteUserRepository} = require ("../../repositories/user-repository");

async function deleteUser(id) {
  /*

  - TODO 20: Deve retornar uma exceção de erro "User ID is required" se o ID não for passado;
  - TODO 21: Se pelo ID passado não existir um usuário no banco, deve retornar uma exceção com o erro "User not exists";
  - TODO 22: Com o sucesso na remoção, deve retornar TRUE
*/
  if (!id) throw new Error("User ID is required");

  let usersList = await loadUsersRepository();
  let userIDCount = 0;

  usersList.forEach((userData) => {
    if (parseInt(userData.id) === id) {
      deleteUserRepository();

      userIDCount++;
    }
  });

  if (userIDCount === 0) throw new Error("User not exists");

  return true;
}

module.exports = { deleteUser };
