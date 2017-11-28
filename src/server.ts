/**
 * Module dependencies.
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';
import * as koaJwt from 'koa-jwt';

/**
 * config
 */
import * as config from './config';

/**
 * Controllers (route handlers).
 */
import * as usersController from './controllers/usersController';
import * as protectedController from './controllers/protectedController';

const app = new Koa();
const router = new Router();

app.use(koaBody());

/**
 * Use Jwt for all paths, except the ones starting with /public
 */
app.use(koaJwt({ secret: config.constants.jwtSecret }).unless({ path: [/^\/public/] }));

/**
 * Declare routes.
 */
router
  .post('/public/login', usersController.login)
  .get('/protected', protectedController.protectedResource);


app.use(router.routes());

app.listen(3000);

console.log('Server listens on port 3000');
