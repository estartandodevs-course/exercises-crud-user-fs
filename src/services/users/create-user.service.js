const { loadUsersRepository, createUserRepository } = require('../../repositories/user-repository');
const { encryptPassword } = require('../../utils/encrypt-password');
const shortid = require('shortid');

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
  const id = shortid();
  const encriptedPassword = encryptPassword(password);
  const user = {
    id,
    name,
    email,
    password: encriptedPassword,
    phone,
    status: true
  };
  createUserRepository(user);
  return user;
}

module.exports = { createUser };
