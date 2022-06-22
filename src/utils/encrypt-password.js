const crypto = require('crypto');
const { verifyParameters } = require('./parameters-validate')
require('dotenv').config();

function encryptPassword(password) {

    // solução meio desnecessária. estava bringando com o javascript aqui
const isPasswdValid = (passwd) => {
    if (passwd.length > 7) {
    return true;
    } else { return null } 
}
verifyParameters([password],'Password is required')
verifyParameters([isPasswdValid(password)],'Password must be at least 8 characters' );

// if (isPasswdValid) throw new Error('Password must be at least 8 characters');


const salt = 'estartando devs',
      iterations = 1000,
      keylen = 64,
      digest = 'sha512';

return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString(`hex`);


}
// console.log(encryptPassword('123456'));

module.exports = { encryptPassword };
