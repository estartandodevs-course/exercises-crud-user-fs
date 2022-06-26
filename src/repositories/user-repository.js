/*
  IMPORTANTE! A responsabilidade do Repository é apenas a gerencia dos dados
  Não deve conter regras de negócio!
*/

const path = require ('path');
const fs = require ('fs');

const usersListPath = path.join(__dirname, '..', 'data/users.json');

async function loadUsersRepository() {
  /*
  - TODO 1 : Deve retornar uma lista de usuários a partir do caminho src/data/users.json;
  - TODO 2 : Deve ser usado um método de leitura do FS como readFile nessa implementação;  
  */
  const usersList = new Promise (async (resolve, reject) => {
    try {
      fs.readFile(usersListPath, 'utf8', (err, data) => {
      if (err) throw err;

      let jsonData = JSON.parse(data);

      resolve(jsonData);
      })
    } catch (err) {
      reject(err);
    }
  })
  return usersList;
}

// loadUsersRepository().then((data) => {
//   console.log(data.length)
//   console.log(data[0])
//   console.log(data[1])
// })

/*
  - TODO 3: Deve retornar uma exceção de erro "User is required" caso não seja passado os dados
  - TODO 4: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;   
  - TODO 5: Deve retornar o usuário após salvar no banco de dados;
*/

async function createUserRepository(user) {
  /*
  - TODO 6: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 7: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 8: Deve retornar TRUE após salvar no banco de dados;
  */
  if (!user) throw new Error('User is required');

  usersList = await loadUsersRepository();
  usersList.push(user);

  let stringUsersList = JSON.stringify(usersList, null, 2)

  fs.writeFile(usersListPath, stringUsersList, (err) => {
    if (err) throw err;

    return true;
  })
}

const user = {
  id: 1654826575603,
    name: 'Jao',
    email: 'jao@gmail.com',
    password: '123456',
    phone: '11999999999'
}

// createUserRepository(user)

async function updateUserRepository(id, data) {
  /*
  - TODO 9: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 10: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 11: Deve retornar TRUE após remover um dado no banco de dados;
*/
  if (!id) throw new Error('User Id is required');

  usersList = await loadUsersRepository();
  // let stringUsersList = JSON.stringify(usersList);

  usersList.forEach((user) => {
    if (parseInt(user.id) === id) { 
      let updateUserData = [{
        id: id,
        name: data.name || user.name,
        email: data.email || user.email,
        password: data.password || user.password,
        phone: data.phone || user.phone
      }]
      updateUserData = JSON.stringify(updateUserData, null, 2)

      fs.writeFile(usersListPath, updateUserData, (err) => {
      if (err) throw err;

      return true;
      })
    } 
  })
}

const dataUser = {
      name: "Name updated",
      email: "email updated",
      password: "password updated",
      phone: "phone updated",
    };
updateUserRepository(1654826575603, dataUser)

async function deleteUserRepository(id) {
  /*
  - TODO 12: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 13: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 14: Deve retornar TRUE após remover um dado no banco de dados;
*/
  if (!id) throw new Error('User Id is required');
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
