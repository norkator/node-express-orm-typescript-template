import {Dialect, Sequelize} from 'sequelize'
import * as dotEnv from 'dotenv'

let pgTools = require('pgtools');

dotEnv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWD,
    {
        port: Number(process.env.DB_PORT),
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        },
        logging: function (str) {
            if ((process.env.SEQ_LOGGING === 'true')) {
                console.info(str);
            }
        },
    }
);

sequelize.sync().then(function () {
    console.log('DB connection success.');
}, function (err) {
    console.error(JSON.stringify(err));
    if (err.parent.code === '3D000') {
        console.error('Database does not exist, error ' + err.parent.code);
        createDatabase();
    }
});

export default sequelize


function createDatabase() {
    console.info('PgTools check database existence');
    pgTools.createdb({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST
        // @ts-ignore
    }, process.env.DB_DATABASE, function (error, response) {
        if (!error) {
            console.info('db ' + process.env.DB_DATABASE +
                ' did not exists. Created it. Please, restart app!')
        }
    });
}