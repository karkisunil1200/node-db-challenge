exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Node project 1'},
        {id: 2, name: 'Node project 2'},
        {id: 3, name: 'Node project 3'},
        {id: 4, name: 'Node project 4'},
        {id: 5, name: 'Node project 5'}
      ]);
    });
};
