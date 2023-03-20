'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feeding extends Model {
    static associate(models) { 
      Feeding.belongsTo(models.Cat, {
        foreignKey: 'catId',
      })
    }
  }

  Feeding.init({
    name: DataTypes.STRING,
    meal: {
      type: DataTypes.ENUM("Breakfast", "Lunch", "Dinner"),
      defaultValue: 'Breakfast'
    },
    catId: {
      type: DataTypes.INTEGER,
			allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cats',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Feeding',
  });

  return Feeding;
};