import {NextFunction, Request, Response} from 'express';
import HttpError from "../../config/error/index";

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function test(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        res.status(200).json({result: 'ok'});
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}