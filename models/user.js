'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Name solo debe tener letras de a - z'
        },
        notEmpty:{
          args: true,
          msg: 'Name no deve estar vacio'
        },
        notNull: true
      }
    },
    email:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail:{
          args: true,
          msg: 'Email deve tener @'
        },
        notEmpty:{
          args: true,
          msg: 'Name no deve estar vacio'
        },
        notNull: true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len: {
          args: [5,10],
          msg:  "password entre 5 y 10"
        }
      }
    } 
  }, {
  
    sequelize,
    modelName: 'User',
    timestamps: false 
  });
  return User;
};