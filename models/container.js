'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Container.belongsTo(models.Toy, {
        foreignKey: 'toyId',
      })
    }
  }
  Container.init({
    name: DataTypes.STRING,
    room: {
      type: DataTypes.ENUM('Living Room', 'Entryway', 'Bedroom'),
      defaultValue: 'Living Room'
    },
    toyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Toys',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Container',
  });
  return Container;
};