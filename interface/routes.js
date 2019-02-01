const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const UserController = require('./user/rest/user-controller');
const UserValidator = require('./user/rest/user-validator');
const TaskController = require('./task/rest/task-controller');

const { validationResult } = require('express-validator/check');
const errorResponseBuilder = function (req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(422).send({errors: errors.array()});

    next();
};

module.exports.install = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

    app.post('/user/authenticate', UserValidator.authenticate, errorResponseBuilder, UserController.authenticate);
    app.get('/user/:userId/tasks', TaskController.allUserTasks);
    app.post('/user/:userId/tasks', TaskController.createUserTask);
    app.get('/user/:userId/tasks/:taskId', TaskController.getUserTask);
    app.put('/user/:userId/tasks/:taskId', TaskController.updateUserTask);
    app.delete('/user/:userId/tasks/:taskId', TaskController.deleteUserTask);
};

