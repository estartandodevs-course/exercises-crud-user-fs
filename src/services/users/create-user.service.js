const { loadUsersRepository,  createUserRepository,  } = require('../../repositories/user-repository')
const { encryptPassword } = require('../../utils/encrypt-password')

async function createUser({ name, email, password, phone }) {
  /*
  - TODO 18: Deve ser usado a funcionalidade "encryptPassword" para proteger o password;
*/
  if ( name == null || email  == null || phone  == null) {throw new Error('Name, Email, Password are required')};

  const usersRepository = await loadUsersRepository()
  
  const newId = new Date().getTime();
  
  const user = {
    id: newId,
    name: name,
    email: email,
    password: encryptPassword(password),
    phone: phone,
    status: true
  }
  
  usersRepository.forEach(element => {
    const {email} = element
    if (user.email == email) {throw new Error('User already exists')}
  });
  
  createUserRepository(user)
  return user;
}



module.exports = { createUser };
