exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'do the project1'},
        {id: 2, project_id: 2, description: 'do the project2'},
        {id: 3, project_id: 3, description: 'do the project3'},
        {id: 4, project_id: 4, description: 'do the project4'},
        {id: 5, project_id: 5, description: 'do the project5'}
      ]);
    });
};
