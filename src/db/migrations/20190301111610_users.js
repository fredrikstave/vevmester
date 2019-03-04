exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('display_name').nullable();
    table.string('user_id').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
