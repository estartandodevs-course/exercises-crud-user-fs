const fs = require('fs');
const path = require('path')
const getDirectory = path.join(__dirname, '..', 'data', 'users.json')


function loadUsersRepository() {
  const data = fs.readFileSync(getDirectory, "utf8")
  return JSON.parse(data);
}


async function createUserRepository(user) {
  if (!user) throw new Error("User is required");

  const users = await loadUsersRepository();
  const newUsers = [...users, user]

  fs.writeFileSync(getDirectory, JSON.stringify(newUsers));
  return true
}


async function updateUserRepository(id, data) {
  if (!id) throw new Error("User Id is required")

  const users = await loadUsersRepository()

  users.forEach((user) => {
    if (user.id === id) {
      user.id = id;
      user.name = data.name || user.name;
      user.email = data.email || user.email;
      user.password = data.password || user.password;
      user.phone = data.phone || user.phone;
    }
  });

  fs.writeFileSync(getDirectory, JSON.stringify(users))
  return true
}


async function deleteUserRepository(id) {
  if (!id) throw new Error("User Id is required")

  const users = await loadUsersRepository()
  const newUsers = users.filter((user) => user.id !== id)

  fs.writeFileSync(getDirectory, JSON.stringify(newUsers))
  return true
}


module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
