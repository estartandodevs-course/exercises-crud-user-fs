const { updateUserRepository } = require('../../repositories/user-repository.js')
const { findUserById } = require('../users/find-user-by-id.service.js')

async function updateUser(id, { name, email, phone }) {

  if (!id) throw new Error("User ID is required")
  if (await findUserById(id) == null) throw new Error("User not exists")

  await updateUserRepository(id, {
    name: name,
    email: email,
    phone: phone
  })

  return true
}

module.exports = { updateUser };
