import * as dotEnv from 'dotenv'

dotEnv.config();


function loggingEnabled(): boolean {
    return process.env.NODE_ENV === 'development';
}

export function logInfo(str: string) {
    if (loggingEnabled()) {
        console.info(str);
    }
}

export function logError(str: string) {
    if (loggingEnabled()) {
        console.error(str);
    }
}
