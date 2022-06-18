/*
  IMPORTANTE! A responsabilidade do Repository é apenas a gerencia dos dados
  Não deve conter regras de negócio!
*/

const fs = require('fs')
const path = require('path')
const dataPath = path.resolve(__dirname,'../data/users.json')

async function loadUsersRepository() {

  const data = fs.readFileSync(dataPath,"utf8")  
  const users = JSON.parse(data)
  return(users) ;

}


async function createUserRepository(user) {

  if (user == null) throw new Error('User is required');
  const usersRepository = await loadUsersRepository() 
  const data = [...usersRepository,user]
  fs.writeFileSync(dataPath,JSON.stringify(data))
  return user

}

async function updateUserRepository(id, data) {

  if( id == null) throw new Error('User Id is required');
  const usersRepository = await loadUsersRepository()

  const user = usersRepository.filter((obj) => obj.id == id )
  const withoutUser = usersRepository.filter((obj) => obj.id != id )

  const updatedUser = {
    id: id,
    name: data.name,
    email: data.email,
    passwd: user[0].passwd,
    phone: data.phone,
  }
  
  const dataUpdated = [...withoutUser,updatedUser]
  fs.writeFileSync(dataPath,JSON.stringify(dataUpdated))

  return true;
}
// updateUserRepository("1655576536381", {name: 'Pedrinho', email:'pedrinho@email.com',phone:'63984412527'})

async function deleteUserRepository(id) {

if( id == null) throw new Error('User Id is required');
const usersRepository = await loadUsersRepository()

const newUsersRepository = usersRepository.filter((obj) => obj.id != id )

fs.writeFileSync(dataPath,JSON.stringify(newUsersRepository))

return true;
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
