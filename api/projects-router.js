const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.addResources()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({message: 'No projects found', error: err.message});
    });
});

router.get('/task', (req, res) => {
  Projects.getTask()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({message: 'No task found', error: err.message});
    });
});

router.get('/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({message: 'No resources found', error: err.message});
    });
});

router.post('/task', (req, res) => {
  Projects.addTask()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({message: 'Error addding task', err: err.message});
    });
});

router.post('/resources', (req, res) => {
  Projects.addResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({message: 'Error adding resources', err: err.message});
    });
});

router.module.exports = router;
