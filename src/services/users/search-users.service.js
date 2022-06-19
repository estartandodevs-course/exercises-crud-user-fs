const { loadUsersRepository } = require('../../repositories/user-repository');
const { mergeUser } = require('../../utils/merge-user');

function searchUsers(name) {
  const users = loadUsersRepository();
  const nameUsers = users.filter((user)=>{
    return user.name.toLowerCase().includes(name.toLowerCase());
  });
  return nameUsers.map((user)=>{
    return mergeUser(user);
  });
}

module.exports = { searchUsers };
