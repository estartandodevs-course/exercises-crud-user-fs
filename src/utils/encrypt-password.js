const crypto = require ('crypto');

function encryptPassword(password) {
  /*
  - TODO 32: Deve retornar uma exceção de erro "Password is required" caso não seja passado um password;
  - TODO 33: Deve retornar uma exceção de erro "Password must be at least 8 character" caso o password passado seja menor que 8 caracteres;
  - TODO 34: Deve retornar um HASH maior que 100 para indicar sucesso; 
*/
  if (!password) throw new Error("Password is required");

  if (password.length < 8) throw new Error("Password must be at least 8 characters");

  const salt = "fraseparamisturarnacriptografiaç";
  const key = crypto.pbkdf2Sync(password.toString(), salt, 1000, 100, 'sha512')

  return key;
}

module.exports = { encryptPassword };
