exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          project_id: 1,
          name: 'laptop',
          description: 'a device that will let you do different tasks'
        },
        {id: 2, project_id: 2, name: 'headphones'},
        {id: 3, project_id: 3, name: 'airplane'}
      ]);
    });
};
