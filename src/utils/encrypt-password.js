const crypto = require('crypto');


function encryptPassword(password) {
  /*
  - TODO 32: Deve retornar uma exceção de erro "Password is required" caso não seja passado um password;
  - TODO 33: Deve retornar uma exceção de erro "Password must be at least 8 character" caso o password passado seja menor que 8 caracteres;
  - TODO 34: Deve retornar um HASH maior que 100 para indicar sucesso; 

*/

if (password == null) throw new Error('Password is required');
if (password.length <= 7) throw new Error('Password must be at least 8 characters');


const salt = 'estartando devs',
      iterations = 1000,
      keylen = 64,
      digest = 'sha512';

const buffer = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
const hash = buffer.toString(`hex`);

return hash;
}
// encryptPassword('123456789');

module.exports = { encryptPassword };
