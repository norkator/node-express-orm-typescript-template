import {NextFunction, Request, Response} from 'express';
import HttpError from "../../server/error/index";
import * as dotEnv from 'dotenv'
import * as Customer from "../../../database/dao/customer";
import {getJwtPayloadUserDetails} from "../Authentication/authUtils";
import {CustomerModelInterface} from "../../../database/models/customer";

dotEnv.config();

/**
 * Return all customers
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const payloadUser = await getJwtPayloadUserDetails(req);
        res.json(await Customer.findAll(payloadUser.organization_id));
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
 * Returns one customer
 * @param req
 * @param res
 * @param next
 */
export async function getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const customerId = Number(req.params.customerId);

        if (customerId === undefined) {
            throw new Error('Missing customer id on request params!');
        }

        res.json(await Customer.findOne(customerId));
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
 * Create customer
 * @param req
 * @param res
 * @param next
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const customer = <CustomerModelInterface>{
            customer_name: req.body.customer_name,
            customer_description: req.body.customer_description,
        };

        if (customer.customer_name === undefined) {
            throw new Error('New customer name must be specified!');
        }

        const payloadUser = await getJwtPayloadUserDetails(req);

        customer.organization_id = payloadUser.organization_id;
        const savedItem: CustomerModelInterface = await Customer.create(customer);

        res.json(savedItem);

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
 * Update customer
 * @param req
 * @param res
 * @param next
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const payloadUser = await getJwtPayloadUserDetails(req);

        const customerId = Number(req.params.customerId);

        if (customerId === undefined) {
            throw new Error('Missing customer id on request params!');
        }

        const item = <CustomerModelInterface>{
            id: customerId,
            organization_id: payloadUser.organization_id,
            customer_name: req.body.customer_name,
            customer_description: req.body.customer_description,
        };

        res.json(
            await Customer.update(item) as CustomerModelInterface
        );

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
 * Delete customer
 * @param req
 * @param res
 * @param next
 */
export async function deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const customerId = Number(req.params.customerId);

        if (customerId === undefined) {
            throw new Error('Missing customer id on request params!');
        }

        await Customer.deleteOne(customerId);

        res.json({
            status: 200,
            message: 'Customer deleted.'
        })
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
