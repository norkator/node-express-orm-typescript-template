import * as dotEnv from 'dotenv'
import * as loggingUtil from '../app/loggingUtil'

const pgTools = require('pgtools');

dotEnv.config();


export async function dbExists(): Promise<boolean> {
    try {
        return await createDatabase;
    } catch (error) {
        loggingUtil.logError(error);
        return false;
    }
}


const createDatabase = new Promise<boolean>((resolve, reject) => {
    loggingUtil.logInfo('Pg tools checking database existence...');
    pgTools.createdb({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST
        // @ts-ignore
    }, process.env.DB_DATABASE, function (error, response) {
        if (!error) {
            loggingUtil.logInfo('db ' + process.env.DB_DATABASE + ' did not exists. Created it.');
            resolve(true);
        } else {
            loggingUtil.logError(error);
            reject(false);
        }
    });

});