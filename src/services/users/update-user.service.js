const { loadUsersRepository,  updateUserRepository } = require("../../repositories/user-repository");


async function updateUser(id, { name, email, phone }) {
  /*
  - 29: Deve retornar uma exceção de erro "User ID is required" caso não tenha passado ID;
  - 30: Se pelo ID passado não existir um usuário no banco, deve retornar uma exceção com o erro "User not exists";
  - 31: Deve retornar TRUE se o usuário for atualizado corretamente;   
*/

if(id === undefined){
  throw new Error("User ID is required");
} 
const users = loadUsersRepository();
const Exist = users.find((user) => {
  return user.id === id;
})
if(!Exist){
  throw new Error("User not exists");
}
updateUserRepository(id);
return true;

}

module.exports = { updateUser };