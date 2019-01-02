const TaskRepositoryImpl = require('../../infrastructure/persistence/psql/taskRepository');

module.exports.findAll = (userId) => {
    return TaskRepositoryImpl.findAll(userId);
};

module.exports.create = (task) => {
    return TaskRepositoryImpl.create(task);
};