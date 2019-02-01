const UserRepository = require('../../../domain/model/userRepository');

module.exports.authenticate = async (req, res) => {
    // This is working! Just needs to be refactored
    //req.assert('username', 'Username is required').notEmpty();

    // if(req.validationErrors()){
        
    // }

    let user = await UserRepository.find(req.body.username);

    if(user === null)
        res.status(401).end();
    else
        res.status(200).send(JSON.stringify(user));
};

