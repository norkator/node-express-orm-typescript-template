import {IAuthService} from './interface';
import {UserModelInterface} from "../../database/models/user";

/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {

    /**
     * @param {UserModelInterface} body
     * @returns {Promise <UserModelInterface>}
     * @memberof AuthService
     */
    async getUser(body: UserModelInterface): Promise<UserModelInterface> {
        try {

            /*
            const user: IUserModel = await UserModel.findOne({
                email: body.email
            });

            const isMatched: boolean = user && await user.comparePassword(body.password);

            if (isMatched) {
                return user;
            }

            throw new Error('Invalid password or email');
            */
            return null;
        } catch (error) {
            throw new Error(error);
        }
    }
};

export default AuthService;
