const objectMapper = require('object-mapper');

function mergeUser(user){
    if(!user){
        return Promise.reject(new Error('User is required'));
    }
    const status = {
        status: true
    };
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