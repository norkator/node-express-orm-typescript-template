import * as schedule from 'node-schedule';
import * as utils from './utils/utils'

export function app(): void {

    // Register scheduled tasks (every 6 hours)
    schedule.scheduleJob('0 */6 * * *', async function () {
        await utils.exampleTask();
    });

    /* More tasks here? */
}