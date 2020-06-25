import * as express from 'express';
import * as Middleware from './middleware';
import * as Routes from '../routes/index';
import * as dotEnv from 'dotenv'

dotEnv.config();

const app: express.Application = express();

Middleware.configure(app);
Routes.init(app);
Middleware.initErrorHandler(app);

export default app;
