const path = require('path');
const fs = require('fs');
const pathToUsers = path.join(__dirname, '..', 'data', 'users.json');

function isKey(objeto, key){
  return Object.keys(objeto).includes(key);
}

/*
  IMPORTANTE! A responsabilidade do Repository é apenas a gerencia dos dados
  Não deve conter regras de negócio!
*/

function loadUsersRepository() {
  /*
  - 1 : Deve retornar uma lista de usuários a partir do caminho src/data/users.json;
  - 2 : Deve ser usado um método de leitura do FS como readFile nessa implementação;  
  */

  const users = fs.readFileSync(pathToUsers, 'utf8');
  return JSON.parse(users);

}

function createUserRepository(user) {
  
/*
  - 3: Deve retornar uma exceção de erro "User is required" caso não seja passado os dados
  - 4: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;   
  - 5: Deve retornar o usuário após salvar no banco de dados;
*/
  if(!user){
    return Promise.reject(new Error('User is required'));
  }
  const users = loadUsersRepository();
  users.push(user);
  fs.writeFileSync(pathToUsers, JSON.stringify(users));
  return user;
}

function updateUserRepository(id, data) {
  /*
  -  9: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - 10: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - 11: Deve retornar TRUE após salvar um dado no banco de dados;
*/
  if(!id){
    return Promise.reject(new Error('User Id is required'));
  }
  const users = loadUsersRepository();

  users.map((user)=>{
    if(user.id === id){
      Object.keys(user).map((key)=>{
        if(isKey(data, key)){
          user[key] = data[key];
        }
      })
    }
  })

  fs.writeFileSync(pathToUsers, JSON.stringify(users));

  return true;
}

async function deleteUserRepository(id) {
  /*
  - 12: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - 13: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - 14: Deve retornar TRUE após remover um dado no banco de dados;
*/

  if(!id){
  return Promise.reject(new Error('User Id is required'));
  }
  const users = loadUsersRepository();
  const user = users.find(user=>user.id === id);
  users.splice(users.indexOf(user), 1);
  fs.writeFileSync(pathToUsers, JSON.stringify(users));
  return true;
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
