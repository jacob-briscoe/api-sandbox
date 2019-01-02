const TaskRepository = require('../../../domain/model/taskRepository');

module.exports.allUserTasks = async (req, res) => {
    let tasks = await TaskRepository.findAll(req.params.userId);
    res.status(200).send(JSON.stringify(tasks));
};

module.exports.createUserTask = async (req, res) => {
    const task = {
        userId: req.params.userId,
        detail: req.body.detail
    };

    let taskId = await TaskRepository.create(task);
    res.status(200).send(JSON.stringify(taskId));
};