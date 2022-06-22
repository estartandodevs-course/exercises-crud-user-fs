const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserByEmail(email) {


    const usersRepository = await loadUsersRepository()

    const user = usersRepository.find((obj) => obj.email === email)
        if (user == undefined) return false;

    return  {
        name:user.name,
        email:user.email,
        phone:user.phone
    }
}

module.exports = { findUserByEmail };
