const express = require('express');
const projectRouter = require('../projects/project-router');
const resourceRouter = require('../projects/resource-router');

const server = express();

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;
