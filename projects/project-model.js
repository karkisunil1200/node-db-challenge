const Db = require('../data/dbConfig');

module.exports = {
  getProjects,
  getResources
};

function getProjects() {
  return Db.select('*').from('projects');
}

function getResources() {
  return Db.select('r.name', 'r.description').from('resources as r');
}
