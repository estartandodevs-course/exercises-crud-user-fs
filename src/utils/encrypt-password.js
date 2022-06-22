const crypto = require('crypto');
require('dotenv').config();

function encryptPassword(password) {

if (password == null) throw new Error('Password is required');
if (password.length <= 7) throw new Error('Password must be at least 8 characters');


const salt = process.env['SALT'],
      iterations = 1000,
      keylen = 64,
      digest = 'sha512';

return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString(`hex`);


}
// encryptPassword('123456789');

module.exports = { encryptPassword };
