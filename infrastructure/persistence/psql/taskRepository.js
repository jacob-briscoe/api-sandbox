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

module.exports.findOne = (taskId) => {
    return database.oneOrNone({
        text: 'select * from user_tasks where id = $1',
        values: [taskId]
    });
};

module.exports.update = (task) => {
    return database.none({
        text: 'update tasks set detail = $1, modified = timezone(\'UTC\'::text, now()) where id = $2',
        values: [task.detail, task.id]
    });
};

module.exports.delete = (taskId) => {
    return database.none({
        text: 'delete from tasks where id = $1',
        values: [taskId]
    });
};
