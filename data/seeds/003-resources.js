exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, project_id: 1, name: 'computer'},
        {id: 2, project_id: 2, name: 'laptop'},
        {id: 3, project_id: 3, name: 'ruler'},
        {id: 4, project_id: 4, name: 'phone'},
        {id: 5, project_id: 5, name: 'knowledge'}
      ]);
    });
};
