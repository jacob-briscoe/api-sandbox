const TaskRepositoryImpl = require('../../infrastructure/persistence/psql/taskRepository');

module.exports.findAll = (userId) => {
    return TaskRepositoryImpl.findAll(userId);
};