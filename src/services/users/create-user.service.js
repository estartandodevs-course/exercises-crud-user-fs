const { loadUsersRepository, createUserRepository } = require('../../repositories/user-repository');
const { encryptPassword } = require('../../utils/encrypt-password');
const { mergeUser } = require('../../utils/merge-user');

function createUser({ name, email, password, phone }) {
  if (!name || !email || !password) {
    return Promise.reject(new Error('Name, Email, Password are required'));
  }
  const users = loadUsersRepository();
  const isExist = users.map((user)=>{
    if(user.email === email){
      return true;
    }
  });
  if(isExist.includes(true)){
    return Promise.reject(new Error('User already exists'));
  }
  const id = 1000 + users.length;
  const encriptedPassword = encryptPassword(password);
  const user = {
    id,
    name,
    email,
    password: encriptedPassword,
    phone
  };
  createUserRepository(user);
  return mergeUser(user);
}

module.exports = { createUser };
