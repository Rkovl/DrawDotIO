'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drawings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  drawings.init({
    title: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    is_published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'drawings',
  });
  return drawings;
};