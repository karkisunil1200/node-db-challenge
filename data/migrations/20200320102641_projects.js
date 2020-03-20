exports.up = function(knex) {
  return (
    knex.schema
      //Projects
      .createTable('projects', tbl => {
        tbl.increments();

        tbl
          .string('project_name')
          .notNullable()
          .unique();

        tbl.string('description');
      })

      //Tasks
      .createTable('tasks', tbl => {
        tbl.increments();

        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects');

        tbl
          .string('name')
          .notNullable()
          .unique();

        tbl.string('description').notNullable();
        tbl.string('notes').notNullable();
        tbl.boolean('completed').notNullable();
      })
      //Resources
      .createTable('resources', tbl => {
        tbl.increments();

        tbl
          .string('name')
          .notNullable()
          .unique();

        tbl.string('description').notNullable();
        tbl.string('notes');
      })

      //Connection
      .createTable('connection', tbl => {
        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects');
        tbl
          .integer('task_id')
          .notNullable()
          .references('id')
          .inTable('tasks');
        tbl
          .integer('resource_id')
          .notNullable()
          .reference('id')
          .inTable('resources');
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('connection')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
