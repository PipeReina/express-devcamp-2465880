'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Title solo debe tener letras de a - z'
        },
        notEmpty:{
          args: true,
          msg: 'Title no debe estar vacío'
        },
        notNull: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Description solo debe tener letras de a - z'
        },
        notEmpty:{
          args: true,
          msg: 'Description no debe estar vacío'
        },
        notNull: true
      }
    },
    weeks:{
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate:{
        len: {
          args: [1,2],
          msg:  "Weeks debe ser razonable a 1 o 2 cifras"
        },
        notEmpty:{
          args: true,
          msg: 'Weeks no debe estar vacío'
        },
        notNull: true
      }
    },
    enroll_cost:{
      type:DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      validate:{
        len: {
          args: [4,6],
          msg:  "Enroll_cost debe ser razonable, con valor mayor a 4 o 6 cifras"
        },
        notEmpty:{
          args: true,
          msg: 'Enroll_cost no debe estar vacío'
        },
        notNull: true
      }
    },
    minimum_skill:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Minimum_skilln solo debe tener letras de a - z'
        },
        notEmpty:{
          args: true,
          msg: 'Minimum_skilln no debe estar vacío'
        },
        notNull: true
      }
    },
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false 
  });
  return Courses;
};