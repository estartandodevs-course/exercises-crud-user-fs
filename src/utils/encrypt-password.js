const crypto = require('crypto')

function encryptPassword(password) {
  if (!password) throw new Error("Password is required")
  if (password.length < 8) throw new Error("Password must be at least 8 characters")

  const newPassword = password,
    salt = "transformando o mundo atraves da tecnologia",
    interations = 1000,
    keylen = 100,
    digest = "sha512"

  const buffer = crypto.pbkdf2Sync(newPassword, salt, interations, keylen, digest)
  return hash = buffer.toString('hex')

  /*
  - TODO 32: Deve retornar uma exceção de erro "Password is required" caso não seja passado um password;
  - TODO 33: Deve retornar uma exceção de erro "Password must be at least 8 character" caso o password passado seja menor que 8 caracteres;
  - TODO 34: Deve retornar um HASH maior que 100 para indicar sucesso; 

*/
}

module.exports = { encryptPassword };
