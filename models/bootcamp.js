'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
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
          msg: 'Name no debe estar vacío'
        },
        notNull: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Phone solo debe tener letras de a - z'
        },
        notEmpty:{
          args: true,
          msg: 'Phone no debe estar vacío'
        },
        notNull: true
      }
    },
    average_cost:{
      type:DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      validate:{
        len: {
          args: [4,6],
          msg:  "Averge_cost debe ser razonable, con valor mayor a 4 o 6 cifras"
        },
        notEmpty:{
          args: true,
          msg: 'Averge_cost no debe estar vacío'
        },
        notNull: true
      }
    },
    average_rating:{
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        len: {
          args: [1,5],
          msg:  "average_rating: debe ser razonable a 1 o 5 cifras"
        },
        notEmpty:{
          args: true,
          msg: 'average_rating: no debe estar vacío'
        },
        notNull: true
      }
    },
  }, {
    sequelize,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};