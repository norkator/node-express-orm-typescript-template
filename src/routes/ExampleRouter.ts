import {Router} from 'express'
import {ExampleComponent} from '../components'
import * as jwtConfig from "../server/jwtAuth";

/**
 * @constant {express.Router}
 */
const router: Router = Router();


/**
 * GET method route
 * @example http://localhost:PORT/example/no-auth:
 *
 * @swagger
 * /example/no-auth:
 *  get:
 *    description: Example route with no authentication
 *    tags: ["Example"]
 *    responses:
 *      201:
 *        description: return created user
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: ''
 *      default:
 *        description: unexpected error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 */
router.get('/no-auth', ExampleComponent.test);


/**
 * GET method route
 * @example http://localhost:PORT/example/with-auth:
 *
 * @swagger
 * /example/with-auth:
 *  get:
 *    description: Example route with authentication
 *    tags: ["Example"]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      201:
 *        description: return created user
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: ''
 *      default:
 *        description: unexpected error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 */
router.get('/with-auth', jwtConfig.isAuthenticated, ExampleComponent.test);


/**
 * @export {express.Router}
 */
export default router;