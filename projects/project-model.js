const Db = require('../data/dbConfig');

module.exports = {
  getProjects,
  getResources,
  getTasks
};

function getProjects() {
  return Db.select('*').from('projects');
}

function getResources() {
  return Db.select('r.name', 'r.description').from('resources as r');
}

function getTasks() {
  return Db.select('t.description', 'p.name')
    .from('tasks as t')
    .join('projects as p', 't.project_id', 'p.id');
}
