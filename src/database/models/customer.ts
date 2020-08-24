import {Model, STRING, BIGINT} from 'sequelize'
import sequelize from '../index'

export interface CustomerModelInterface {
    id: number;
    organization_id: number;
    customer_name: string;
    customer_description: string;
    createdAt: string;
    updatedAt: string;
}

export class CustomerModel extends Model {
}

CustomerModel.init(
    {
        id: {
            type: BIGINT(),
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: BIGINT(),
        customer_name: STRING(50),
        customer_description: STRING(100),
    },
    {sequelize, modelName: 'Customer'}
);
