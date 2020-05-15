const express = require('express');
const Db = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Db.getResources()
    .then(resources => {
      res.status(200).json({data: resources});
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching resources'});
    });
});

module.exports = router;
