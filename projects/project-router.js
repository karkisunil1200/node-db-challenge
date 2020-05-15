const express = require('express');
const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProject()
    .then(project => {
      res.status(200).json({data: project});
    })
    .catch(err => {
      res.status(500).json({message: err.messasge});
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Projects.findProject(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({message: 'Id not available'});
      }
    })
    .catch(err => {
      res.status(500).json({message: err.messasge});
    });
});

router.post('/', (req, res) => {
  const data = req.body;

  Projects.addProject(data)
    .then(project => {
      res.status(201).json({data: project});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
