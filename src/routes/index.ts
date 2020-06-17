import * as express from 'express';
import * as http from 'http';
import * as swaggerJsdoc from 'swagger-jsdoc'
import * as swaggerUi from 'swagger-ui-express';
import * as jwtConfig from '../server/jwtAuth';

import AuthenticationRouter from '../routes/AuthenticationRouter'
import ExampleRouter from '../routes/ExampleRouter'


const swaggerOptions = require('../../swagger');


const swaggerSpecs = swaggerJsdoc(swaggerOptions);


/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();


    /**
     * @description
     * Specify main routes and their routers
     * either with authentication required or not
     * see examples below
     */
    app.use('/auth', AuthenticationRouter);
    app.use('/example', ExampleRouter); // With JWT here: app.use('/example', jwtConfig.isAuthenticated, ExampleRouter);

    /**
     * @description
     * Swagger is updated using swagger-jsdoc automatically every startup
     * so no need for any swagger cli manual work
     */
    app.use('/docs', swaggerUi.serve);
    app.get('/docs', swaggerUi.setup(swaggerSpecs));

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}
