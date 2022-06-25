const { loadUsersRepository } = require('../../repositories/user-repository');

function findUserByEmail(email) {
  const users = loadUsersRepository();
  const user = users.find((user)=> user.email === email);
  if(!user){
    return false;
  }
  return user;
}

module.exports = { findUserByEmail };
