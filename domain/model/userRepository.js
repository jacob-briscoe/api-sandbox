const userRepositoryImpl = require('../../infrastructure/persistence/psql/userRepository');

module.exports = {

    find: (username) => {
        return userRepositoryImpl.find(username);
    }

};