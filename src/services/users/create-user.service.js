const { createUserRepository } = require("../../repositories/user-repository.js")
const { loadUsersRepository } = require("../../repositories/user-repository.js")


async function createUser({ name, email, password, phone }) {
  const users = await loadUsersRepository()

  if(!name || !email || !password) throw new Error("Name, Email, Password are required")
  if (emailAlredyExist(email) == true) throw new Error("User already exists")  

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    phone: phone,
    status: true
  }

  createUserRepository(newUser)
  /*
  - TODO 15: Os campos name, email, password são obrigatórios, caso algum não seja passado deve retornar uma exceção de error "Name, Email, Password are required";
  - TODO 16: Se o email passado já existir no banco para outro usuário, deve retornar uma exceção com o erro "User already exists";
  - TODO 17: Deve gerar o ID automaticamente a partir de 1000;
  - TODO 18: Deve ser usado a funcionalidade "encryptPassword" para proteger o password;
  - TODO 19: Deve retornar um usuário válido ao final do processo de insert;
*/
}

async function emailAlredyExist(email){
  const users = await loadUsersRepository()
  users.forEach((user)=>{
    if(user.email.toString() === email){
      return true
    }
  })
}

module.exports = { createUser };
