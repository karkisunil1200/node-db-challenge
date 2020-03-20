const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({message: 'No projects found', error: err.message});
    });
});

// router.get('/:id', (req, res) => {
//   projects
//     .getProjectById(req.params.id)
//     .then(project => {
//       res.status(200).json(project);
//     })
//     .catch(err => {
//       res.status(500).json({message: 'No project found', error: err.message});
//     });
// });

router.get('/tasks', (req, res) => {
  projects
    .getTask()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({message: 'No task found', error: err.message});
    });
});

router.get('/:id/tasks', (req, res) => {
  projects
    .getTaskById(req.params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({message: 'No task found', error: err.message});
    });
});

router.get('/resources', (req, res) => {
  projects
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({message: 'No resources found', error: err.message});
    });
});

router.post('/:id/tasks', (req, res) => {
  const body = req.body;
  const id = req.params.id;
  projects
    .addTask(id, body)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({message: 'Error addding task', err: err.message});
    });
});

router.post('/:id/resources', (req, res) => {
  projects
    .addResource(req.params.id, req.body)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({message: 'Error adding resources', err: err.message});
    });
});

module.exports = router;
