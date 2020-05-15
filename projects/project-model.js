const Db = require('../data/dbConfig');

module.exports = {
  getProjects
};

function getProjects() {
  return Db.select('*').from('projects');
}
