import * as express from 'express';
import * as Middleware from './middleware';
import * as Routes from '../routes/index';
import * as dotEnv from 'dotenv'

dotEnv.config();

/**
 * @constant {express.Application}
 */
const app: express.Application = express();

/**
 * @constructs express.Application Middleware
 */
Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * Sets api port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

/**
 * Sets jwt secret, otherwise specified in the environment
 */
app.set('secret', process.env.JWT_SECRET || '8fa410b58360fd97f3e15a752fd2d6281fc7c0f8');

/**
 * Set jwt expiration time
 */
app.set('jwt-expire', process.env.JWT_EXPIRE || '60m');

/**
 * @exports {express.Application}
 */
export default app;
