import * as express from 'express';
import * as Middleware from '../middleware/middleware';
import * as Routes from '../../routes';

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
 * Set database dialect (postgres, mariaDb, sqlite..)
 */
app.set('db-dialect', process.env.DB_DIALECT || 'postgres');


/**
 * Set database host address
 */
app.set('db-host', process.env.DB_HOST || '127.0.0.1');

/**
 * Set database user
 */
app.set('db-user', process.env.DB_USER || 'postgres');

/**
 * Set database password
 */
app.set('db-password', process.env.DB_PASSWD || 'BadPassword');

/**
 * Set database name
 */
app.set('db-name', process.env.DB_NAME || 'ApiExample');



/**
 * @exports {express.Application}
 */
export default app;
