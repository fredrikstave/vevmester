const Router = require('koa-router');

const router = new Router({
  prefix: '/templates',
});

router.get('/', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = { message: 'This is the templates endpoint' };
});

module.exports = function templates() {
  return router.routes();
};
