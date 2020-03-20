exports.up = function(knex) {
  return (
    knex.schema
      //Projects
      .createTable('projects', tbl => {
        tbl.increments();

        tbl
          .string('name')
          .notNullable()
          .unique();

        tbl.string('description');
        tbl.bool('completed').defaultTo(false);
      })

      //Tasks
      .createTable('tasks', tbl => {
        tbl.increments();

        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');

        tbl.string('description', 4000).notNullable();
        tbl.string('notes');
        tbl.bool('completed').defaultTo(false);
      })
      //Resources
      .createTable('resources', tbl => {
        tbl.increments();

        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');

        tbl
          .string('name')
          .notNullable()
          .unique();

        tbl.string('description', 4000).notNullable();
        tbl.string('notes');
      })

      //Project Resource
      .createTable('connectionTable', tbl => {
        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl
          .integer('task_id')
          .notNullable()
          .references('id')
          .inTable('tasks')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl
          .integer('resources_id')
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('connectionTable')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
