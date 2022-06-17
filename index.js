'use strict';

const { sequelize } = require('./src/models');
const server = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection!');
  })  
  .catch(error => console.error(error));

server.start();