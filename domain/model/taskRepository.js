const TaskRepositoryImpl = require('../../infrastructure/persistence/psql/taskRepository');

module.exports.findAll = (userId) => {
    return TaskRepositoryImpl.findAll(userId);
};

module.exports.create = (task) => {
    return TaskRepositoryImpl.create(task);
};

module.exports.findOne = (taskId) => {
    return TaskRepositoryImpl.findOne(taskId);
};

module.exports.update = (task) => {
    return TaskRepositoryImpl.update(task);
};

module.exports.delete = (taskId) => {
    return TaskRepositoryImpl.delete(taskId);
};
