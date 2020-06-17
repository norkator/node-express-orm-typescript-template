import {Model, STRING, BIGINT} from 'sequelize'
import sequelize from './index'

export class UserModel extends Model {
}

UserModel.init(
    {
        id: {
            type: BIGINT(),
            primaryKey: true,
            autoIncrement: true
        },
        name: STRING(50),
        email: STRING(50),
        password: STRING(100)
    },
    {sequelize, modelName: 'User'}
);


export interface UserModelInterface {
    id: number;
    name: string;
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>;
    createdAt: string;
    updatedAt: string;
}
