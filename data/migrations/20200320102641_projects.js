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
        tbl.bool('completed', false);
      })

      //Tasks
      .createTable('tasks', tbl => {
        tbl.increments();

        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects');

        tbl.string('description', 4000).notNullable();
        tbl.string('notes');
        tbl.bool('completed', false).notNullable();
      })
      //Resources
      .createTable('resources', tbl => {
        tbl.increments();

        // tbl
        //   .integer('project_id')
        //   .notNullable()
        //   .references('id')
        //   .inTable('projects');

        tbl
          .string('name')
          .notNullable()
          .unique();

        tbl.string('description', 4000).notNullable();
        tbl.string('notes');
      })

      //Project Resource
      .createTable('projectResource', tbl => {
        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        // tbl
        //   .integer('task_id')
        //   .notNullable()
        //   .references('id')
        //   .inTable('tasks');
        tbl
          .integer('resource_id')
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
    .dropTableIfExists('projectResource')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
