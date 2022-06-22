const { createUserRepository } = require('../../repositories/user-repository')
const { encryptPassword } = require('../../utils/encrypt-password')
const { findUserByEmail } = require('./find-user-by-email.service');

async function createUser({ name, email, password, phone }) {
  if ( name == null || email  == null || phone  == null) {throw new Error('Name, Email, Password are required')};

  // const usersRepository = await loadUsersRepository()
  
  const newId = new Date().getTime(); //criar util p gerar id com crypto
  
  const user = {
    id: newId,
    name: name,
    email: email,
    password: encryptPassword(password),
    phone: phone,
    status: true
  }
  
  const userAlreadyExist = await findUserByEmail(email)

  if (userAlreadyExist == false){
    try {
      createUserRepository(user)
      return user;      
    } catch (error) {
      throw new Error('Erro interno::',error)
    }
  } else {
    throw new Error('User already exists');
  }  
}

// createUser({name:'Pedro',email:'felicia@emaila.com',password:'132464565',phone:'63984412527'})

module.exports = { createUser };
