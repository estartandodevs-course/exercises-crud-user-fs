const crypto = require("crypto");

 function encryptPassword(password) {
  /*
  - 32: Deve retornar uma exceção de erro "Password is required" caso não seja passado um password;
  - 33: Deve retornar uma exceção de erro "Password must be at least 8 character" caso o password passado seja menor que 8 caracteres;
  - 34: Deve retornar um HASH maior que 100 para indicar sucesso; 

*/

if(!password){
  throw new Error("Password is required");
}
if(password.length < 8 ){
  throw new Error("Password must be at least 8 characters");
}

const salt = "enchendo linguiça";
const iterations = 1000;
const keylen = 64;
const digest = "sha512";

const buffer = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
const hash = buffer.toString(`hex`);

return hash;

}

module.exports = { encryptPassword };
