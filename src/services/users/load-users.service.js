const { loadUsersRepository } = require('../../repositories/user-repository');
const { mergeUser } = require('../../utils/merge-users');

function loadAllUsers() {
  const users = loadUsersRepository();
  return users.map((user)=>{
    return mergeUser(user);
  });
}

module.exports = { loadAllUsers };
