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

router.post('/', (req, res) => {
  const project = req.body;

  Db.addProject(project)
    .then(count => {
      res.status(200).json({data: count});
    })
    .catch(err => {
      res.status(500).json({message: 'failed adding project', error: err.message});
    });
});

router.post('/tasks', (req, res) => {
  const task = req.body;

  Db.addTask(task)
    .then(tasks => {
      res.status(200).json({data: tasks});
    })
    .catch(err => {
      res.status(500).json({message: 'failed to add task', error: err.message});
    });
});

module.exports = router;
