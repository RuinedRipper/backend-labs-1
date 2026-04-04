const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

// Меняем '/node/' на '/'
router.get('/', (ctx) => {
  ctx.body = 'Hello from Node!';
});

app.use(router.routes());
app.use(router.allowedMethods()); // Хорошим тоном будет добавить и это

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});