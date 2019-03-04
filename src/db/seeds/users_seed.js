
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {display_name: 'Fredrik Stave', user_id: 'fredrikstave@me.com'},
        {display_name: 'Esten Placht', user_id: 'esten@e24.no'},
      ]);
    });
};
