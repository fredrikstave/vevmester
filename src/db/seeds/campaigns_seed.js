const uuid = require('uuid/v1');

exports.seed = function(knex, Promise) {
  return knex('campaigns').del()
    .then(function () {
      return knex('campaigns').insert([
        { campaign_id: uuid(), owner_id: 1, name: 'Standardplakat', private: false, newsroom: 'e24' },
        { campaign_id: uuid(), owner_id: 1, name: 'Sommerkampanje', private: false, newsroom: 'e24' },
        { campaign_id: uuid(), owner_id: 2, name: 'Standardplakat', private: false, newsroom: 'dinepenger' },
        { campaign_id: uuid(), owner_id: 1, name: 'Vinterkampanje', private: false, newsroom: 'e24' },
        { campaign_id: uuid(), owner_id: 2, name: 'Påsketilbud', private: false, newsroom: 'dinepenger' },
        { campaign_id: uuid(), owner_id: 1, name: 'Black Friday', private: false, newsroom: 'dinepenger' },
        { campaign_id: uuid(), owner_id: 1, name: 'Cyber Monday', private: true, newsroom: 'e24' },
      ]);
    });
};
