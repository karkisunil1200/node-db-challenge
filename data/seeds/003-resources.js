exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, project_id: 1, name: 'computer', description: 'hello there'},
        {id: 2, project_id: 2, name: 'laptop', description: 'hello there'},
        {id: 3, project_id: 3, name: 'ruler', description: 'hello there'},
        {id: 4, project_id: 4, name: 'phone', description: 'hello there'},
        {id: 5, project_id: 5, name: 'knowledge', description: 'hello there'}
      ]);
    });
};
