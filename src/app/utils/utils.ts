import * as loggingUtil from "../loggingUtil";
import * as dotEnv from 'dotenv'

dotEnv.config();

export async function exampleTask(): Promise<boolean> {
    try {
        loggingUtil.logInfo('running exampleTask');
        return await examplePromiseFunction;
    } catch (error) {
        loggingUtil.logError(error);
        return false;
    }
}

const examplePromiseFunction = new Promise<boolean>((resolve, reject) => {
    resolve(true);
});