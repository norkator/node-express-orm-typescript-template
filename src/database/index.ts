import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(app.get('db-name'), app.get('db-user'), app.get('db-password'), 
{
        port: 5432,
        host: app.get('db-host'),
        dialect: process.env.DB_DIALECT

)

export default sequelize