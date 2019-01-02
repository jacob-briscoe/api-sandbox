const database = require('./database').db;

module.exports.findAll = (userId) => {
    return database.any({
        text: 'select * from user_tasks where user_id = $1 order by created asc',
        values: [userId]
    });
};

module.exports.create = (task) => {
    return database.one({
        text: 'insert into tasks (user_id, detail) values ($1, $2) returning id',
        values: [task.userId, task.detail]
    });
};