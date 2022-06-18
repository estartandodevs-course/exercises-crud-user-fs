const fs = require('fs');
const path = require('path');

function isKey(user, key){
  return key in user;
}

function getDirectory(){
  const dir = path.join(__dirname, '..', 'data', 'users.json');
  return dir;
}

function loadUsersRepository() {
  const datas = fs.readFileSync(getDirectory(), 'utf-8');
  return JSON.parse(datas);
}

function createUserRepository(user) {
  if(!user){
    return Promise.reject(new Error("User is required"));
  }

  const datas = loadUsersRepository();
  datas.push(user);
  fs.writeFileSync(getDirectory(), JSON.stringify(datas));
  return(true);
}

function updateUserRepository(id, data) {
  if(!id){
    return Promise.reject(new Error("User Id is required"));
  }
  const datas = loadUsersRepository();
  datas.map((user)=>{
    if(user.id === id){
      Object.keys(user).map((key)=>{
        if(isKey(data, key)){
          user[key] = data[key];
        }
      })
    }
  });
  fs.writeFileSync(getDirectory(), JSON.stringify(datas));
  return true;
}

function deleteUserRepository(id) {
  if(!id){
    return Promise.reject(new Error("User Id is required"));
  }
  const datas = loadUsersRepository();
  datas.map((user)=>{
    if(user.id === id){
      datas.splice(datas.indexOf(user), 1);
    }
  });
  fs.writeFileSync(getDirectory(), JSON.stringify(datas));
  return true;
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
