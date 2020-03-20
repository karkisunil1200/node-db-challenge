const db = require('../dbConfig');

module.exports = {
  addResources,
  getResources,
  getProjects,
  addTask,
  getTask
};

function getProjects() {
  return db('projects');
}

function getResources() {}

function getTask() {}

function addResources() {}

function addTask() {}
