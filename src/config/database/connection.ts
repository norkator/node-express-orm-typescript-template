import app from "../server/server";
import * as Knex from 'knex'
import {Model} from 'objection'

interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel?: string;
    useNewUrlParser?: boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};


const knex = Knex({
    client: app.get('db-dialect'),
    connection: {
        host: app.get('db-host'),
        user: app.get('db-user'),
        password: app.get('db-password'),
        database: app.get('db-name'),
    }
});

Model.knex(knex);


// export const db: mongoose.Connection = mongoose.createConnection(MONGO_URI, connectOptions);

