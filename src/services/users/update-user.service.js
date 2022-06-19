const { loadUsersRepository, updateUserRepository} = require('../../repositories/user-repository')

async function updateUser(id, { name, email, phone }) {
  
  if (id == null) throw new Error('User ID is required');
  
  const usersRepository = await loadUsersRepository();
  const user = usersRepository.filter((obj) => obj.id == id)

  if (user[0] == null) throw new Error('User not exists');  
  
  updateUserRepository(id, { name, email, phone });
  
  return true;
}

module.exports = { updateUser };
