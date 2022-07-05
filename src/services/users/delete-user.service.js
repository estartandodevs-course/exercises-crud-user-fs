const { deleteUserRepository } = require('../../repositories/user-repository.js')
const { findUserById } = require('../../services/users/find-user-by-id.service')

async function deleteUser(id) {
  if (!id) throw new Error("User ID is required")
  if (await findUserById(id) === null) throw new Error("User not exists")

  await deleteUserRepository(id)
  return true
}

module.exports = { deleteUser };
