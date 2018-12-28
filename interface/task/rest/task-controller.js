const TaskRepository = require('../../../domain/model/taskRepository');

module.exports.allUserTasks = async (req, res) => {
    let tasks = await TaskRepository.findAll(req.params.userId);
    res.status(200).send(JSON.stringify(tasks));
};