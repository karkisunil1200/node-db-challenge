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

module.exports = router;
