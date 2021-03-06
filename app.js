const logger = require('./infrastructure/logger');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const webLogger = require('morgan');
const router = require('./interface/routes');
var validator = require('express-validator');

const app = express();

app.use(helmet());
app.use(webLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(validator());
router.install(app);

logger.info('Successfully started API.');

module.exports = app;
