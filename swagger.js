const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Node-Typescript API',
        version: '1.0.0',
        description: 'Node Express Orm Typescript template api',
    },
    servers: [
        { url: 'http://localhost:3000' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
