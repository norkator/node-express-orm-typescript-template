import {AuthenticationComponent} from '../components';
import {Router} from 'express';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


/**
 * POST method route
 * @example http://localhost:PORT/auth/create-account
 *
 * @swagger
 * /auth/create-account:
 *   post:
 *      description: Create new User
 *      tags: ["Authentication"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 *            example:
 *              name: Test User
 *              email: test@tester.com
 *              password: toohardpasswd
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: ''
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: ''
 */
router.post('/create-account', AuthenticationComponent.createAccount);


/**
 * POST method route
 * @example http://localhost:PORT/auth/login
 *
 * @swagger
 * /auth/login:
 *   post:
 *      description: Login with existing account
 *      tags: ["Authentication"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: user login request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 *            example:
 *              email: test@tester.com
 *              password: toohardpasswd
 *      responses:
 *        201:
 *          description: return login user and token
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: ''
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: ''
 */
router.post('/login', AuthenticationComponent.login);

/**
 * @export {express.Router}
 */
export default router;
