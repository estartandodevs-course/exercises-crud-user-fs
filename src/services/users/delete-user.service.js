const { deleteUserRepository  } = require('../../repositories/user-repository')
const { findUserById  } = require('./find-user-by-id.service');


async function deleteUser(id) {

  if (id == null) throw new Error('User ID is required');


  const userExist = await findUserById(id)

  if (userExist != null){
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
