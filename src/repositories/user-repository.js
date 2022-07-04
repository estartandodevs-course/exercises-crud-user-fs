const fs = require('fs')
const path = require('path')
const getDirectory = path.join(__dirname, '..', 'data', 'users.json')


async function loadUsersRepository() {
  const data = fs.readFileSync(getDirectory,"utf8")  
  return JSON.parse(data) ;
}


async function createUserRepository(user) {
  if (!user) {
    throw new Error("User is required");
  }
  const users = await loadUsersRepository();
  const newUsers = [...users, user]
  fs.writeFileSync(getDirectory, JSON.stringify(newUsers));
  return true
}


async function updateUserRepository(id, data) {
  if(!id){
    throw new Error("User Id is required")
  }
  const oldUsers = loadUsersRepository()

  const newUsers = oldUsers.map((user) => {
    if (parseInt(user.id) === id){
      user.id = id
      user.name = data.name || user.name
      user.email = data.email || user.email
      user.password = data.password || user.password
      user.phone = data.phone || user.phone
    }
  })

  fs.writeFileSync(getDirectory, JSON.stringify(newUsers))
  return true
}

async function deleteUserRepository(id) {
  /*
  - TODO 12: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 13: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 14: Deve retornar TRUE após remover um dado no banco de dados;
*/
}




// console.log(loadUsersRepository())
// createUserRepository('1003')
// updateUserRepository('1002', 'ola mundo')


module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
