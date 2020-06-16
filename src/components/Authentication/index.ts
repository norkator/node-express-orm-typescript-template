import {NextFunction, Request, Response} from 'express';
import app from "../../config/server/server";
import HttpError from "../../config/error";
import * as jwt from 'jsonwebtoken';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function createAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // const user: IUserModel = await AuthService.createUser(req.body);
        /*
        const token: string = jwt.sign({email: user.email}, app.get('secret'), {
            expiresIn: app.get('jwt-expire')
        });


        res.json({
            status: 200,
            logged: true,
            token: token,
            message: 'Account created successfully'
        });
        */
        res.json({result: 'ok'})
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.json({
            status: 400,
            message: error.message
        });
    }
}


/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise < void > {
    res.json({result: 'ok'});
}