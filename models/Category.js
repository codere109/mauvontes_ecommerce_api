const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INT,
      autoIncrement: true,
      primaryKey: true
    },

    category_name:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        max: 32,
      }

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;