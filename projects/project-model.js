const Db = require('../data/dbConfig');

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addTask,
  addResource
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

function addProject(project) {
  return Db.select('*')
    .from('projects')
    .insert(project);
}

function addTask(task) {
  return Db.select('*')
    .from('tasks')
    .insert(task);
}

function addResource(resource) {
  return Db.select('*')
    .from('resources')
    .insert(resource);
}
