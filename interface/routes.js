const userController = require('./user/rest/user-controller');

module.exports = {
    install(app){
        app.post('/user/authenticate', userController.authenticate);
    }
};

