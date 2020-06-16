import {Router} from 'express'
import {ExampleComponent} from '../components'

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', ExampleComponent.test);
// router.post('/', UserComponent.create);
// router.get('/:id', UserComponent.findOne);
// router.delete('/:id', UserComponent.remove);

/**
 * @export {express.Router}
 */
export default router;