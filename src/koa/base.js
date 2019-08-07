const Koa = require('koa');
const app = new Koa();

const http = require('http');
const https = require('https');
http.createServer(app.callback()).listen(4000);
https.createServer(app.callback()).listen(4001);
// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(4000);


// error

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});
