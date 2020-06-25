import {Dialect, Sequelize} from 'sequelize'
import * as dotEnv from 'dotenv'
import * as loggingUtil from "../app/loggingUtil";

dotEnv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
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
    loggingUtil.logInfo('DB connection success.');
}, function (err) {
    loggingUtil.logError(JSON.stringify(err));
});

export default sequelize