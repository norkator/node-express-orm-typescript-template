import {Router} from 'express'
import {CustomerComponent} from '../components/index'

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/* Note: these routes already have '/customers' part on them */

// Todo: swagger doc!
router.get('/', CustomerComponent.getAll); // Retrieves a list of customers

// Todo: swagger doc!
router.get('/:customerId', CustomerComponent.getOne); // Retrieves a specific customer

// Todo: swagger doc!
router.post('/', CustomerComponent.create); // Create a new customer

// Todo: swagger doc!
router.put('/:customerId', CustomerComponent.update); // Updates customer

// Todo: swagger doc!
router.patch('/:customerId', CustomerComponent.update); // Partial update for one customer

// Todo: swagger doc!
router.delete('/:customerId', CustomerComponent.deleteOne); // Delete customer


/**
 * @export {express.Router}
 */
export default router;
