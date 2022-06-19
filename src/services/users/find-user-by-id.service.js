const { loadUsersRepository } = require('../../repositories/user-repository');

function findUserById(id) {
  const users = loadUsersRepository();
  const user = users.find((user)=> user.id == id);
  if(!user){
    return null;
  }
  return user;
}

module.exports = { findUserById };
