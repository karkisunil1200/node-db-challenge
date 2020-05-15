const express = require('express');
const Db = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Db.getProjects()
    .then(project => {
      res.status(200).json({projects: project});
    })
    .catch(err => {
      res.status(500).json({message: 'Failed fetching your projects', error: err.message});
    });
});

router.get('/tasks', (req, res) => {
  Db.getTasks()
    .then(task => {
      res.status(200).json({tasks: task});
    })
    .catch(err => {
      res.status(500).json({message: 'Failed fetching tasks', error: err.message});
    });
});

module.exports = router;
