const logger = require('../../../infrastructure/logger');
const UserRepository = require('../../../infrastructure/persistence/psql/userRepository');

module.exports.authenticate = async (req, res, next) => {
    logger.info('Attempting to authenticate user.');

    let user = await UserRepository.find(req.body.username);

    if(user === null)
        res.status(401).end();
    else
        res.status(200).send(JSON.stringify(user));
};

