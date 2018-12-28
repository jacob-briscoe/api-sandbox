const UserRepository = require('../../../domain/model/userRepository');

module.exports.authenticate = async (req, res) => {
    let user = await UserRepository.find(req.body.username);

    if(user === null)
        res.status(401).end();
    else
        res.status(200).send(JSON.stringify(user));
};

