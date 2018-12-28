const UserController = require('./user/rest/user-controller');
const TaskController = require('./task/rest/task-controller');

module.exports.install = (app) => {
    app.post('/user/authenticate', UserController.authenticate);
    app.get('/user/:userId/tasks', TaskController.allUserTasks);
};

