exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'finish learning node and master it'},
        {id: 2, project_id: 2, description: 'Learn react native after mastering react'},
        {
          id: 3,
          project_id: 3,
          description: 'have fun with the money you have earned',
          notes: 'make sure to go to japan also'
        }
      ]);
    });
};
