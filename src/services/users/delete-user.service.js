const { loadUsersRepository,  deleteUserRepository,  } = require('../../repositories/user-repository')

async function deleteUser(id) {

  if (id == null) throw new Error('User ID is required');

  const usersRepository = await loadUsersRepository()

  const user = usersRepository.filter((obj) => obj.id == id)
  if (user[0] == null) throw new Error('User not exists')
  
  return deleteUserRepository(id)

}

module.exports = { deleteUser };
