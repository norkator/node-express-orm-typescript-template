const path = require('path');
const dotEnv = require('dotenv');

dotEnv.config();

module.exports = {
    swaggerDefinition: {
        components: {},
        openapi: '3.0.0',
        info: {
            title: 'Node-Typescript API',
            version: '1.0.0',
            description: 'Node Express Orm Typescript Template API',
        },
        "host": 'http://localhost:' + process.env.PORT,
    },
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};

