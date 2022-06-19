const crypto = require('crypto');
require('dotenv').config();

function encryptPassword(password) {
  if(!password){
    throw new Error("Password is required");
  }
  if(password.length < 8){
    throw new Error("Password must be at least 8 characters");
  }
  const salt = process.env.SALT;
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash;
}

module.exports = { encryptPassword };
