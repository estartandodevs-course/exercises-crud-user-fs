const crypto = require('crypto');

function encryptPassword(password) {
  if(!password){
    throw new Error("Password is required");
  }

  if(password.length < 8){
    throw new Error("Password must be at least 8 characters");
  }

  const salt = "O rato roeu a roupa do Rei de roma, a rainha com raiva resolveu remendar. Num ninho de mafagafos, cinco mafagafinhos há! Quem os desmafagafizá-los, um bom desmafagafizador será.";
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash;
}

module.exports = { encryptPassword };
