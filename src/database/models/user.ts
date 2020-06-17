import {Model, STRING, BIGINT} from 'sequelize'
import sequelize from './index'

export class UserModel extends Model {
}

/*
export class AppUserModel {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
*/

UserModel.init(
    {
        id: {
            type: BIGINT(),
            primaryKey: true,
            autoIncrement: true
        },
        name: STRING(50),
        email: STRING(50),
        password: STRING(50)
    },
    {sequelize, modelName: 'UserModel'}
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
