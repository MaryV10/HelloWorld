'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Place}) {
      this.belongsTo(Place, { foreignKey: "placeId" });
    }
  }
  Photo.init({
    placeId: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};