const UserRepositoryImpl = require('../../infrastructure/persistence/psql/userRepository');

module.exports = {

    find: (username) => {
        return UserRepositoryImpl.find(username);
    }

};