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
}

module.exports = { encryptPassword };
