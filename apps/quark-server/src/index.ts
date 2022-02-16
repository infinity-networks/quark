import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createConnection, ConnectionOptions } from 'typeorm';
import router from './routes';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123456',
  synchronize: true,
  logging: false,
  extra: {}
}

createConnection(connectionOptions).then(async () => {
  const app = new Koa();

  // 注册中间件
  app.use(cors())

  app.use(bodyParser())

  app.use(helmet);

  // 响应用户请求
  app.use(router.routes()).use(router.allowedMethods());

  app.listen(8080, () => {
    console.log(`Server running on port ${8080}`)
  })

}).catch((error) => {
  console.log('TypeORM connection error:', error)
});