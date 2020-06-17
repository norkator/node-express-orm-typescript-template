import * as http from 'http';
import * as eventHandlers from './eventHandlers';
import server from './server';

const Server: http.Server = http.createServer(server);


/**
 * Binds and listens for connections on the specified host
 */
Server.listen(server.get('port'));
console.info('Server running at port ' + server.get('port'));


/**
 * Server Events
 */
Server.on('error', (error: Error) => eventHandlers.onError(error, server.get('port')));

Server.on('listening', eventHandlers.onListening.bind(Server));
