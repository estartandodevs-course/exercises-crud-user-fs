const { loadUsersRepository } = require('../repositories/user-repository.js')

async function idGenerator() {
    const usersLength = await loadUsersRepository().length
    const newId = (1000 + usersLength).toString()
    return newId
}

module.exports = { idGenerator }
