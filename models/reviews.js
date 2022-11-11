'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    name:{
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
    title:{
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
    text:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Text solo debe tener letras de a - z'
        },
        notEmpty:{
          args: true,
          msg: 'Text no debe estar vacío'
        },
        notNull: true
      }
    },
    rating:{
      type:DataTypes.FLOAT,
      allowNull: false,
      unique: true,
      validate:{
        len: {
          args: [1],
          msg:  "Rating debe ser razonable, con valor mayor 1 cifras"
        },
        notEmpty:{
          args: true,
          msg: 'Rating no debe estar vacío'
        },
        notNull: true
      }
    },
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false 
  });
  return reviews;
};