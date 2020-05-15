const express = require('express');
const Db = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Db.getResources()
    .then(resource => {
      res.status(200).json({resources: resource});
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching resources', error: err.message});
    });
});

router.post('/', (req, res) => {
  const resource = req.body;

  Db.addResource(resource)
    .then(count => {
      res.status(200).json({data: count});
    })
    .catch(err => {
      res.status(500).json({message: 'failed adding resouces'});
    });
});

module.exports = router;
