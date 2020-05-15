const express = require('express');
const Db = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Db.getProjects()
    .then(projects => {
      res.status(200).json({data: projects});
    })
    .catch(err => {
      res.status(500).json({message: 'Failed fetching your projects', error: err.message});
    });
});

module.exports = router;
