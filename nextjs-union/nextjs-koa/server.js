// Import prerequisite packages
const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');
const session = require('koa-session');

// Initialize KoaJs server and router
const server = new Koa();
const router = new Router();

// Initialize NextJs instance and expose request handler
const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();


const CONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: false, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: false, /** (boolean) httpOnly or not (default true) */
  signed: false, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  secure: false, /** (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};

(async () => {
  try {
    await nextApp.prepare();


    server.use(session(CONFIG, server));
    router.get('/custom-page', async ctx => {
      if (ctx.path === '/favicon.ico') return;

      await nextApp.render(ctx.req, ctx.res, '/myHandlerComponent', ctx.query);
      ctx.respond = false;
    });

    router.get(/^\/$/, async ctx => {
      console.log(ctx.originalUrl);
      await handler(ctx.req, ctx.res);
      ctx.respond = false;
    });
    router.get(/.*/, async ctx => {
      await handler(ctx.req, ctx.res);
      ctx.respond = false;
    });

    server.use(async (ctx, next) => {

      let n = ctx.session.views || 0;
      ctx.session.views = ++n;
      ctx.state.at = { asdasd: 1 }
      console.log('view count', ctx.session.views)
      await next();
    });

    server.use(router.routes());
    server.listen(3000, _ => console.log('App running on port 3000'));
  } catch (e) {
    console.error(e);
    process.exit();
  }
})();