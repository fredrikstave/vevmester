const mount = require('koa-mount');

module.exports = function health() {
  return mount('/health', async ctx => {
    ctx.status = 200;
    ctx.body = 'OK';
  });
};
