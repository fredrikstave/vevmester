const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
// const mount = require('koa-mount');
// const compose = require('koa-compose');
// const cors = require('koa-cors');
// const db = require('./db/connection');
const userAgent = require('koa-useragent');

const PORT = process.env.PORT || 3000;

const app = new Koa;
const router = new Router;

router.get('/', async (ctx, next) => {
  ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html')).toString();
});

router.get('/browser-info', async (ctx, next) => {
  ctx.body = ctx.userAgent;
});

app.use(userAgent);
app.use(router.routes());

// app.context.db = db();
// app.use(cors());

app.listen(PORT);
// Available user agent payloads
// {
//   browser: 'IE',
//   version: '10.0',
//   os: 'Windows 8',
//   platform: 'Microsoft Windows'
// }
// {
//   browser: 'IE',
//   version: '9.0',
//   os: 'Windows 7',
//   platform: 'Microsoft Windows'
// }