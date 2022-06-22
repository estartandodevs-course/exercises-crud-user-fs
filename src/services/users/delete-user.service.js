const { deleteUserRepository  } = require('../../repositories/user-repository')
const { findUserById  } = require('./find-user-by-id.service');
const { verifyParameters} = require('../../utils/parameters-validate')

async function deleteUser(id) {

  verifyParameters([id] , 'User ID is required')

  const userExist = await findUserById(id)

  if (userExist !== null){
    try {
      await deleteUserRepository(id)  
      return true;
    } catch (error) {
      throw new Error('Erro interno::',error)
    }
  } else {
    throw new Error('User not exists');
  }

}

module.exports = { deleteUser };
