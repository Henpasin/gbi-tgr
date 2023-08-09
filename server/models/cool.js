'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cool.init({
    name: DataTypes.STRING,
    leader: DataTypes.STRING,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cool',
  });
  return Cool;
};