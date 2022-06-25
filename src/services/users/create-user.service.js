const { loadUsersRepository, createUserRepository } = require("../../repositories/user-repository");
const {encryptPassword} = require("../../utils/encrypt-password");

async function createUser({ name, email, password, phone }) {
  /*
  - 15: Os campos name, email, password são obrigatórios, caso algum não seja passado deve retornar uma exceção de error "Name, Email, Password are required";
  - 16: Se o email passado já existir no banco para outro usuário, deve retornar uma exceção com o erro "User already exists";
  - 17: Deve gerar o ID automaticamente a partir de 1000;
  - 18: Deve ser usado a funcionalidade "encryptPassword" para proteger o password;
  - 19: Deve retornar um usuário válido ao final do processo de insert;
*/

if(name === undefined|| email === undefined || password === undefined){
  throw new Error("Name, Email, Password are required");
}
const exist = loadUsersRepository();
exist.map((user)=>{ 
  if(user.email === email){
    throw new Error("User already exists");
  }
})

function createId(){
  let newId = 1000;
  return newId++
}

const id = createId();

const pass = encryptPassword(password);

const newUser = {
  id: id,
  name: name,
  email: email,
  phone: phone,
  password: pass,
  status: true
}

createUserRepository(newUser);
return newUser;
}

module.exports = { createUser };

