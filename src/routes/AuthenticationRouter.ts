import {AuthenticationComponent} from '../components';
import {Router} from 'express';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.post('/create-account', AuthenticationComponent.createAccount);
router.post('/login', AuthenticationComponent.login);

/**
 * @export {express.Router}
 */
export default router;
