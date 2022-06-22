const { createUserRepository } = require('../../repositories/user-repository')
const { encryptPassword } = require('../../utils/encrypt-password')
const { findUserByEmail } = require('./find-user-by-email.service');
const { setId } = require('../../utils/id-generator')
const { verifyParameters} = require('../../utils/parameters-validate')

async function createUser({ name, email, password, phone }) {
  
  verifyParameters([name, email, password, phone] , 'Name, Email, Password are required')
  
  const user = {
    id: setId(),
    name: name,
    email: email,
    password: encryptPassword(password),
    phone: phone,
    status: true
  }
  
  const userAlreadyExist = await findUserByEmail(email)

  if (userAlreadyExist === false){
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
