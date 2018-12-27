const logger = require('./infrastructure/logger');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const webLogger = require('morgan');
const router = require('./interface/routes');

const app = express();

app.use(webLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
router.install(app);

logger.info('Successfully started API.');

module.exports = app;
