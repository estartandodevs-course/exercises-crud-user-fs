const { loadUsersRepository, deleteUserRepository } = require("../../repositories/user-repository");

async function deleteUser(id) {
  /*

  - 20: Deve retornar uma exceção de erro "User ID is required" se o ID não for passado;
  - 21: Se pelo ID passado não existir um usuário no banco, deve retornar uma exceção com o erro "User not exists";
  - 22: Com o sucesso na remoção, deve retornar TRUE
*/
if(id === undefined){
  throw new Error("User ID is required");
}
const users = loadUsersRepository();
const notExist = users.find((user) => {
  return user.id === id;
})
if(!notExist){
  throw new Error("User not exists");
}
deleteUserRepository(id);
return true;

}
module.exports = { deleteUser };
