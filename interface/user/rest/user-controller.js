const logger = require('../../../infrastructure/logger');

exports.authenticate = function (req, res, next) {
    logger.info('Attempting to authenticate user.');

    res.send('Success!');
}
