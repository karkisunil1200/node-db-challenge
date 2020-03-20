const express = require('express');
// const projectRouter = require('./api/projects-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to your homepage</h2>`);
});

// server.use('/api/projects', projectRouter);

module.exports = server;
