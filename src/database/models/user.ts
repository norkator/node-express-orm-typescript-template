import { Model, STRING, UUID, Deferrable } from 'sequelize'
import sequelize from '../index'

export class UserModel extends Model {

}

export class AppUserModel {
  id: string
  name: string
  pwd: string
  createdAt: Date
  updatedAt: Date
}

UserModel.init(
  {
      name: STRING(50),
    email: STRING(50),
    pwd: STRING(50)
  },
  { sequelize, modelName: 'UserModel' }
)
