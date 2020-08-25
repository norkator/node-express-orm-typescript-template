import * as jwtAuth from "../../server/jwtAuth";
import {UserModelInterface} from "../../../database/models/user";
import * as User from "../../../database/dao/user";
import {Request} from "express";
import * as crypto from 'crypto'


export async function getJwtPayloadUserDetails(req: Request): Promise<UserModelInterface> {
    const payload = jwtAuth.getJwtPayload(req);

    const payloadUser = <UserModelInterface>{
        id: payload.id,
    };

    if (payloadUser.id === undefined) {
        throw new Error('Missing user id parameter from JWT!');
    }

    const dbUser: UserModelInterface = await User.findOneWithId(payloadUser.id);
    if (dbUser.id === undefined) {
        throw new Error('JWT specified user does not exist in database!');
    }

    return dbUser;
}


/**
 * Return new salt for password
 * @return {string} random 16 bytes
 */
export async function GetSalt() {
    return crypto.randomBytes(16).toString('hex');
}

exports.GetSalt = GetSalt;
