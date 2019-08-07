const Koa = require('koa');
const app = new Koa();

app.listen(4000);

app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
