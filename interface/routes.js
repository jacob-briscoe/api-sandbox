const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const UserController = require('./user/rest/user-controller');
const TaskController = require('./task/rest/task-controller');

module.exports.install = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

    app.post('/user/authenticate', UserController.authenticate);
    app.get('/user/:userId/tasks', TaskController.allUserTasks);
    app.post('/user/:userId/tasks', TaskController.createUserTask);
    app.get('/user/:userId/tasks/:taskId', TaskController.getUserTask);
    app.put('/user/:userId/tasks/:taskId', TaskController.updateUserTask);
    app.delete('/user/:userId/tasks/:taskId', TaskController.deleteUserTask);
};

