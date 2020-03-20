exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('connection')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('connection').insert([
        {porject_id: 1, task_id: 1, resources_id: 1},
        {porject_id: 2, task_id: 2, resources_id: 2},
        {porject_id: 3, task_id: 3, resources_id: 3},
        {porject_id: 4, task_id: 4, resources_id: 4},
        {porject_id: 5, task_id: 5, resources_id: 5}
      ]);
    });
};
