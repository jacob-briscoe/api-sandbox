const database = require('./database').db;

module.exports.findAll = (userId) => {
    return database.any({
        text: 'select * from todo.user_tasks where user_id = $1 order by created asc',
        values: [userId]
    });
};