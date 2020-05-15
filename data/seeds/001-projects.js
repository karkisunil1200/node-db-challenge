exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Learn node', description: 'finish this no matter what'},
        {id: 2, name: 'Learn react', description: 'be the best at it'},
        {id: 3, name: 'Go to Paris', description: 'Go and have fun'}
      ]);
    });
};
