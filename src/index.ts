import * as dbTools from './database/dbTools'
import * as http from 'http';
import * as https from 'https';
import * as eventHandlers from './api/server/eventHandlers';
import server from './api/server/server';
import * as loggingUtil from './app/loggingUtil'
import * as dotEnv from 'dotenv'
import {readFileSync} from 'fs';
import * as app from "./app";

dotEnv.config();

dbTools.dbExists().then(() => {

    /**
     * API
     */
    if (process.env.USE_HTTPS === 'true') {
        const options = {
            key: readFileSync(process.env.KEY_LOCATION),
            cert: readFileSync(process.env.CERT_LOCATION),
        };
        const Server: https.Server = https.createServer(options, server);
        Server.listen(process.env.PORT);
        loggingUtil.logInfo('Server running at port ' + process.env.PORT);
        Server.on('error', (error: Error) => eventHandlers.onError(error, process.env.PORT));
        Server.on('listening', eventHandlers.onListening.bind(Server));

    } else {
        const Server: http.Server = http.createServer(server);
        Server.listen(process.env.PORT);
        loggingUtil.logInfo('Server running at port ' + process.env.PORT);
        Server.on('error', (error: Error) => eventHandlers.onError(error, process.env.PORT));
        Server.on('listening', eventHandlers.onListening.bind(Server));

    }

    /**
     * Jobs
     */
    app.app();

}).catch(() => {
    process.exit();
});