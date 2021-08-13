const Koa = require('koa');
const app = new Koa();

debugger
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
  debugger
});

app.listen(3000);

