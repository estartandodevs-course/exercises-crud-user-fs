const { loadUsersRepository } = require('../../repositories/user-repository');
const { cloneUser } = require('../../utils/merge-users');

function searchUsers(name) {
  const users = loadUsersRepository();
  const nameUsers = users.filter((user)=>{
    return user.name.toLowerCase().includes(name.toLowerCase());
  });
  return nameUsers.map((user)=>{
    return cloneUser(user);
  });
}

module.exports = { searchUsers };
