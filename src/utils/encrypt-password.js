const crypto = require('crypto');


function encryptPassword(password) {

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
