exports.up = function(knex, Promise) {
  return knex.schema.createTable('campaigns', (table) => {
    table.increments();
    table.uuid('campaign_id').notNullable()
    table.integer('owner_id').unsigned();
    table.string('newsroom').notNullable();
    table.string('name').notNullable();
    table.boolean('private').defaultTo(false);

    table.foreign('owner_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('campaigns');
};
