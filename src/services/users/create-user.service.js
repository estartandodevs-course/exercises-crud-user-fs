const {loadUsersRepository} = require ("../../repositories/user-repository");
const {encryptPassword} = require ("../../utils/encrypt-password")

async function createUser({name, email, password, phone}) {
  /*
  - TODO 15: Os campos name, email, password são obrigatórios, caso algum não seja passado deve retornar uma exceção de error "Name, Email, Password are required";
  - TODO 16: Se o email passado já existir no banco para outro usuário, deve retornar uma exceção com o erro "User already exists";
  - TODO 17: Deve gerar o ID automaticamente a partir de 1000;
  - TODO 18: Deve ser usado a funcionalidade "encryptPassword" para proteger o password;
  - TODO 19: Deve retornar um usuário válido ao final do processo de insert;
*/
  if (!name || !email || !password) throw new Error("Name, Email, Password are required");

  let usersList = await loadUsersRepository();
  usersList.forEach((userData) => {
    if (userData.email.toString() === email) throw new Error ('User already exists');
  });

  const createdUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: encryptPassword(),
    phone: phone,
    status: true
  }
  return createdUser;
}

module.exports = { createUser };
