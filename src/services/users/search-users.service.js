const { loadUsersRepository } = require('../../repositories/user-repository');

function searchUsers(name) {
  const users = loadUsersRepository();
  const nameUsers = users.filter((user)=>{
    return user.name.toLowerCase().includes(name.toLowerCase());
  });
  const newUsers = nameUsers.map((user)=>{
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      status: true
    }
  });
  return newUsers;

}

module.exports = { searchUsers };
