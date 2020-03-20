exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resource')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('project_resource').insert([
        {project_id: 1, task_id: 1, resources_id: 1},
        {project_id: 2, task_id: 2, resources_id: 2},
        {project_id: 3, task_id: 3, resources_id: 3},
        {project_id: 4, task_id: 4, resources_id: 4},
        {project_id: 5, task_id: 5, resources_id: 5}
      ]);
    });
};
