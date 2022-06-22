/*
  IMPORTANTE! A responsabilidade do Repository é apenas a gerencia dos dados
  Não deve conter regras de negócio!
*/



const fs = require('fs')
const path = require('path')
const dataPath = path.resolve(__dirname,'../data/users.json')
const { verifyParameters} = require('../utils/parameters-validate')


async function loadUsersRepository() {

  const data = fs.readFileSync(dataPath,"utf8")  
  const users = JSON.parse(data)
  return(users) ;

}


async function createUserRepository(user) {

  verifyParameters([user] , 'User is required')
  const usersRepository = await loadUsersRepository();
  const data = [...usersRepository,user];
  fs.writeFileSync(dataPath,JSON.stringify(data));
  return user;

}

async function updateUserRepository(id, data) {

  verifyParameters([id] , 'User Id is required')
  
  const usersRepository = await loadUsersRepository();

  const user = usersRepository.find((obj) => obj.id === id );

  const updatedUser = {
    id: id,
    name: data.name || user.name,
    email: data.email || user.email,
    password: data.password || user.password,
    phone: data.phone || user.phone  
  };

  const updateRepository = ( usersRepository, objUpdatedUser  ) => {
    return usersRepository.map((objUser) => {
      if(objUser.id == objUpdatedUser.id){
        return objUpdatedUser
      }
      return user
    });
  };

  const newUserRepository = updateRepository(usersRepository,updatedUser)

  fs.writeFileSync(dataPath,JSON.stringify(newUserRepository));

  return true;
  
}
// updateUserRepository("1655671065772", {name: 'Pedrinho', email:'pedrinho@email.com',phone:'63984412527'})

async function deleteUserRepository(id) {

  verifyParameters([id] , 'User Id is required')
  const usersRepository = await loadUsersRepository();

  const newUsersRepository = usersRepository.filter((obj) => obj.id !== id );

  fs.writeFileSync(dataPath,JSON.stringify(newUsersRepository));

  return true;
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
