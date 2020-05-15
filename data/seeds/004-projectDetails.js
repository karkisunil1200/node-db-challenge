exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectDetails')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projectDetails').insert([
        {id: 1, project_id: 1, resource_id: 1, task_id: 1},
        {id: 2, project_id: 2, resource_id: 2, task_id: 2},
        {id: 3, project_id: 3, resource_id: 3, task_id: 3}
      ]);
    });
};
