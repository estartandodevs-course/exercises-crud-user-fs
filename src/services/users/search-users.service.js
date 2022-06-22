
const { loadUsersRepository } = require('../../repositories/user-repository')

async function searchUsers(name) {

const usersRepository = await loadUsersRepository()

const user = usersRepository.filter((user) => user.name === name) 

return user.map((element) => {
    return {
        name:element.name,
        email:element.email,
        phone:element.phone
    }
})
// console.log(user);
}
// searchUsers('Pedro');

module.exports = { searchUsers };
