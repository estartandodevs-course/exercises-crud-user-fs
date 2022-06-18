const { loadUsersRepository } = require('../../repositories/user-repository');
const { cloneUser } = require('../../utils/merge-users');

function loadAllUsers() {
  const users = loadUsersRepository();
  return users.map((user)=>{
    return cloneUser(user);
  });
}

module.exports = { loadAllUsers };
