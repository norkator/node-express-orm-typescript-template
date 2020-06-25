const schedule = require('node-schedule');
import * as utils from './utils/utils'

export function app(): void {

    // Register scheduled tasks
    schedule.scheduleJob('* * 6 * * *', () => { // Every 6 hours
        utils.exampleTask().then(result => {
        }).catch(error => {
        });
    });

    /* More tasks here? */

}
