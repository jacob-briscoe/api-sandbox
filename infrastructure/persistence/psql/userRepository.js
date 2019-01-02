const database = require('./database').db;

module.exports.find = (username) => {
    return database.oneOrNone({
        text: 'select * from users where username = lower($1)',
        values: [username]
    });
};
