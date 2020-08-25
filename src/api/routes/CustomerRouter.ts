import {Router} from 'express'
import {CustomerComponent} from '../components/index'

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/* Note: these routes already have '/customers' part on them */

/**
 * @swagger
 * /customers/:
 *   get:
 *      description: Get all customers
 *      tags: ["Customers"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: retrieves all customers, organization id for filtering is coming from jwt token
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 */
router.get('/', CustomerComponent.getAll); // Retrieves a list of customers

/**
 * @swagger
 * /customers/{customerId}:
 *   get:
 *      description: Get customer with given customer id
 *      summary: Get a customer by ID
 *      parameters:
 *        - in: path
 *          name: customerId
 *          schema:
 *            type: integer
 *          required: true
 *          description: Numeric ID of the customer to get
 *      tags: ["Customers"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: retrieves customer given as url parameter, organization id for filtering is coming from jwt token
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 *      responses:
 *        201:
 *          description: return created customer
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
router.get('/:customerId', CustomerComponent.getOne); // Retrieves a specific customer

/**
 * @swagger
 * /customers/:
 *   post:
 *      description: Create new customer
 *      tags: ["Customers"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: customer creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ''
 *            example:
 *              customer_name: Test Customer
 *              customer_description: Customer for testing purposes
 *      responses:
 *        201:
 *          description: return created customer
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
router.post('/', CustomerComponent.create); // Create a new customer

// Todo: improve swagger doc!
/**
 * @swagger
 * /customers/{customerId}:
 *   put:
 *      description: Update customer
 *      tags: ["Customers"]
 *      security:
 *       - bearerAuth: []
 */
router.put('/:customerId', CustomerComponent.update); // Updates customer

// Todo: improve swagger doc!
/**
 * @swagger
 * /customers/{customerId}:
 *   patch:
 *      description: Partially update customer
 *      tags: ["Customers"]
 *      security:
 *       - bearerAuth: []
 */
router.patch('/:customerId', CustomerComponent.update); // Partial update for one customer

// Todo: improve swagger doc!
/**
 * @swagger
 * /customers/{customerId}:
 *   delete:
 *      description: Delete customer with customerId
 *      tags: ["Customers"]
 *      security:
 *       - bearerAuth: []
 */
router.delete('/:customerId', CustomerComponent.deleteOne); // Delete customer


/**
 * @export {express.Router}
 */
export default router;
