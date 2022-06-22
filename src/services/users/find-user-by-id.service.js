const { loadUsersRepository } = require('../../repositories/user-repository')

async function findUserById(id) {


    const usersRepository = await loadUsersRepository()

    const user = usersRepository.find((obj) => obj.id === parseInt(id));
        if (user == undefined) return null;

    return {
        name:user.name,
        email:user.email,
        phone:user.phone
    }
};
// console.log(user)

module.exports = { findUserById };
// findUserById(1655868551930)