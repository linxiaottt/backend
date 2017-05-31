import KoaRouter from 'koa-router';
import controllers from '../controllers/index.js';

const router = new KoaRouter();

router
  .get('/', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // HOME 路由
  .get('/api/user/getMyInfo', controllers.user.GetMyInfo)
  .get('/api/user/logout', controllers.user.Logout)
  .post('/api/user/login', controllers.user.Login)
  .post('/api/user/register', controllers.user.Register)
  .post('/api/collection/collect', controllers.collection.Collect)
  .get('/api/collection/unCollect', controllers.collection.UnCollect)
  .get('/api/collection/getCollected', controllers.collection.GetCollected)
  .get('/api/collection/hasCollected', controllers.collection.HasCollected)
module.exports = router;
