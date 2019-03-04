const Router = require('koa-router');

const router = new Router({
  prefix: '/campaigns',
});

router.get('/', async (ctx, next) => {
  const newsroom = ctx.headers['x-newsroom'] || '';
  const { user } = ctx.state;

  if (newsroom.length <= 0) {
    ctx.throw(401, 'Newsroom missing in the request');
  }

  const campaigns = await ctx.db('campaigns').select({
    id: 'campaign_id',
    name: 'name',
    private: 'private',
  }).where({
    // private: false,
    'newsroom': newsroom,
  });

  ctx.status = 200;
  ctx.body = {
    campaigns,
  };
});

router.get('/:campaignId', async (ctx, next) => {
  const { user, newsroom } = ctx.state;

  const campaign = await ctx.db('campaigns').where('campaign_id', ctx.params.campaignId);

  ctx.body = campaign.shift();
});

module.exports = function campaigns() {
  return router.routes();
};
