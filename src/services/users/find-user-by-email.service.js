const { loadUsersRepository } = require('../../repositories/user-repository');

function findUserByEmail(email) {
  const users = loadUsersRepository();
  const user = users.filter((user)=> user.email === email);
  if(user.length === 0){
    return false;
  }
  return user[0];
}

module.exports = { findUserByEmail };
