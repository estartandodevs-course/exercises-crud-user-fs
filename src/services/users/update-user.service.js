const { updateUserRepository} = require('../../repositories/user-repository')
const { findUserById  } = require('./find-user-by-id.service');
async function updateUser(id, { name, email, phone }) {
  
  if (id == null) throw new Error('User ID is required');

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
