const crypto = require ('crypto');
const {loadUsersRepository} = require ("../../repositories/user-repository");

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
  
  const salt = "fraseparamisturarnacriptografiaç";
  const key = crypto.pbkdf2Sync(password.toString(), salt, 1000, 64, 'sha512')
  // console.log(key.toString('hex'))

  const createdUser = {
    id: parseInt(Math.random() * (10000000000000 * 1000) - 1000),
    name: name,
    email: email,
    password: key,
    phone: phone,
    status: true
  }
  return createdUser;
}

createUser({
  name: 'karine', 
  email: 'karina@mail', 
  password: '123344', 
  phone: 99999-8999
})

module.exports = { createUser };
