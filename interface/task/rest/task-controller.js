const TaskRepository = require('../../../domain/model/taskRepository');

module.exports.allUserTasks = async (req, res) => {
    let tasks = await TaskRepository.findAll(req.params.userId);
    res.status(200).send(JSON.stringify(tasks));
};

module.exports.createUserTask = async (req, res) => {
    const task = {
        userId: req.params.userId,
        detail: req.body
    };

    let taskId = await TaskRepository.create(task);
    res.status(201).send(JSON.stringify(taskId));
};

module.exports.getUserTask = async (req, res) => {
    let task = await TaskRepository.findOne(req.params.taskId);
    res.status(200).send(JSON.stringify(task));
};

module.exports.updateUserTask = async (req, res) => {
    const task = {
        id: req.params.taskId,
        detail: req.body
    };

    await TaskRepository.update(task);
    res.status(204).end();
};

module.exports.deleteUserTask = async (req, res) => {
    await TaskRepository.delete(req.params.taskId);
    res.status(204).end();
};