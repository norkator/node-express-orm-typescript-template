import {IUserModel} from '../User/model';
import {IAuthService} from './interface';

/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {

    /**
     * @param {IUserModel} body
     * @returns {Promise <IUserModel>}
     * @memberof AuthService
     */
    async createUser(body: IUserModel): Promise<IUserModel> {
        try {

            /*
            const user: IUserModel = new UserModel({
                email: body.email,
                password: body.password
            });

            const query: IUserModel = await UserModel.findOne({
                email: body.email
            });

            if (query) {
                throw new Error('This email already exists');
            }

            const saved: IUserModel = await user.save();

            return saved;
            */
            return null;
        } catch (error) {
            throw new Error(error);
        }
    },
    /**
     * @param {IUserModel} body
     * @returns {Promise <IUserModel>}
     * @memberof AuthService
     */
    async getUser(body: IUserModel): Promise<IUserModel> {
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
