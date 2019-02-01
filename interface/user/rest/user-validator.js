const { check } = require('express-validator/check');

module.exports.authenticate = [
    check('username').isLength({min: 2})
];
