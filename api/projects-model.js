const db = require('../dbConfig');

function getProjects() {
  return db('projects');
}

// function getProjectById(project_id) {
//   return db('projects')
//     .where({project_id})
//     .first();
// }

function getResources() {
  return db('resources');
}

function getTask() {
  return db('tasks')
    .select('projects.id', 'name', 'projects.description', 'tasks.description', 'tasks.notes')
    .join('connectionTable', 'tasks.id', 'connectionTable.task_id')
    .join('projects', 'connectionTable.project_id', 'projects.id');
}

function addResource(project_id, resource) {
  return db('resources')
    .where({project_id})
    .insert(resource);
}

function addTask(project_id, task) {
  return db('tasks')
    .where({project_id})
    .insert(task);
}

function getTaskById(project_id) {
  return db('tasks').where({project_id});
}

module.exports = {
  addResource,
  getResources,
  getTaskById,
  getProjects,
  addTask,
  getTask
};
