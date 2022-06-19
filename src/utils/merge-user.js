const objectMapper = require('object-mapper');

function mergeUser(user){
    if(!user){
        throw new Error('User is required');
    }
    const status = {
        status: true
    };
    user.id = parseInt(user.id);
    const map = {
        id: 'id',
        name: 'name',
        email: 'email',
        password: 'password',
        phone: 'phone'
    }
    return objectMapper.merge(user, status, map);
}

module.exports = { mergeUser };