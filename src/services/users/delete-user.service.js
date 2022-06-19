const { loadUsersRepository, deleteUserRepository } = require('../../repositories/user-repository');

function deleteUser(id) {
  if (!id) {
    return Promise.reject(new Error('User ID is required'));
  }
  const users = loadUsersRepository();
  const isExist = users.map((user) => {
    if (user.id === id) {
      return true;
    }
  });
  if (!isExist.includes(true)) {
    return Promise.reject(new Error('User not exists'));
  }
  deleteUserRepository(id);
  return true;
}

module.exports = { deleteUser };
