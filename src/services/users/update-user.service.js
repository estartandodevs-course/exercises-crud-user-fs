const { updateUserRepository} = require('../../repositories/user-repository')
const { findUserById  } = require('./find-user-by-id.service');
const { verifyParameters} = require('../../utils/parameters-validate')

async function updateUser(id, { name, email, phone }) {
  

  verifyParameters([id] , 'User ID is required')
  const userExist = await findUserById(id)

  if (userExist != null){
    try {
      await updateUserRepository(id, { name, email, phone });  
      return true;
    } catch (error) {
      throw new Error('Erro interno::',error)
    }
  } else {
    throw new Error('User not exists');
  }
}

module.exports = { updateUser };
