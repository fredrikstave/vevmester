const environment = process.env.NODE_ENV || 'development';
const config = require('./config.js');

module.exports = function db() {
  return require('knex')(config[environment]);
};
