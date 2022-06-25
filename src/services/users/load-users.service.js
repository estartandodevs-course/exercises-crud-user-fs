const { loadUsersRepository } = require('../../repositories/user-repository');
const { mergeUser } = require('../../utils/merge-user');

function loadAllUsers() {
  const users = loadUsersRepository();
  return users.map((user)=>{
    return mergeUser(user);
  });
}

module.exports = { loadAllUsers };
