import {Router} from 'express'
import {ExampleComponent} from '../components'

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', ExampleComponent.test);
// router.post('/', ExampleComponent.create);
// router.delete('/:id', ExampleComponent.remove);

/**
 * @export {express.Router}
 */
export default router;