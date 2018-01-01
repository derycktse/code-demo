const koa = require('koa');
const Router = require('koa-router');
const app = koa();

router.get('/', (crx, next) => {
  ctx.body = 'asd'
});

app
  .use(router.routes())
  .use(router.allowedMethods());