import {UserModelInterface} from "../../database/models/user";

/**
 * @export
 * @interaface IAuthService
 */
export interface IAuthService {

    /**
     * @param {UserModelInterface} IUserModel
     * @returns {Promise<UserModelInterface>}
     * @memberof AuthService
     */
    getUser(IUserModel: UserModelInterface): Promise<UserModelInterface>;
}
