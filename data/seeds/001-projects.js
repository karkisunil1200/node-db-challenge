exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Node project 1', description: 'finish this project'},
        {id: 2, name: 'Node project 2', description: 'finish this project'},
        {id: 3, name: 'Node project 3', description: 'finish this project'},
        {id: 4, name: 'Node project 4', description: 'finish this project'},
        {id: 5, name: 'Node project 5', description: 'finish this project'}
      ]);
    });
};
