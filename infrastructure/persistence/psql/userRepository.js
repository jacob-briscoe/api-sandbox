const database = require('./database').db;

module.exports = {

    find: (username) => {
        return database.oneOrNone({
            text: 'select * from todo.users where username = $1',
            values: [username]
        });
    }

};
