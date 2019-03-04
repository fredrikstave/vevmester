const Router = require('koa-router');

const router = new Router({
  prefix: '/newsrooms',
});

router.get('/', async (ctx, next) => {
  ctx.body = {
    newsrooms: [
      {
        id: 'e24',
        displayName: 'E24',
        icon: 'https://e24.no/apple-touch-icon.png',
      },
      {
        id: 'dinepenger',
        displayName: 'Dine Penger',
        icon: 'https://www.dinepenger.no/img/icons/favicon.ico',
      }
    ],
  }
});

module.exports = function newsrooms() {
  return router.routes();
};
