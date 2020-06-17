import {NextFunction, Request, Response} from 'express';
import app from "../../server/server";
import HttpError from "../../server/error";
import * as jwt from 'jsonwebtoken';
import {UserModel, UserModelInterface} from "../../database/models/user";
import * as User from '../../database/dao/user'

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function createAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const user = <UserModelInterface>{
            email: req.body.email,
            password: req.body.password
        };

        // Check for mandatory details
        if (user.email === undefined || user.password === undefined) {
            throw new Error('Missing details!');
        }


        // Look for existence
        const query: UserModelInterface = await User.findOne(<UserModelInterface>user);
        if (query) {
            throw new Error('This email already exists');
        }

        // This will insert new user into database
        const saved: UserModelInterface = await User.create(user);
        console.log('new user created: ' + saved);


        const token: string = jwt.sign({email: user.email}, app.get('secret'), {
            expiresIn: app.get('jwt-expire')
        });

        res.json({
            status: 200,
            logged: true,
            token: token,
            message: 'Account created successfully'
        });

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
export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json({result: 'ok'});
}