const { loadUsersRepository } = require('../../repositories/user-repository');

function loadAllUsers() {
  const users = loadUsersRepository();
  const newUsers = users.map((user)=>{
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      status: true
    };
  })
  return newUsers;
}

module.exports = { loadAllUsers };
