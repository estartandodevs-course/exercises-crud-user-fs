const { loadUsersRepository } = require('../../repositories/user-repository');

function findUserById(id) {
  const users = loadUsersRepository();
  const user = users.filter((user)=> user.id === id);
  if(user.length === 0){
    return null;
  }
  return user[0];
}

module.exports = { findUserById };
