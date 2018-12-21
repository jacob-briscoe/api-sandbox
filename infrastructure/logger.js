const winston = require('winston');
const timeS = () => (new Date()).toLocaleTimeString();

module.exports = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      timestamp: timeS,
      colorize: true
    })
  ]
});