const {loadUsersRepository, updateUserRepository} = require('../../repositories/user-repository');

function updateUser(id, { name, email, phone }) {
  if (!id) {
    return Promise.reject(new Error("User ID is required"));
  }
  const users = loadUsersRepository();
  const isExist = users.find(user => user.id == id);
  if (!isExist) {
    return Promise.reject(new Error("User not exists"));
  }
  updateUserRepository(id, { name, email, phone });
  return true;
}

module.exports = { updateUser };
