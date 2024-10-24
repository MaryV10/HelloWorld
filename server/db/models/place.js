'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Photo, FeedBack, Tag }) {
      this.belongsToMany(User, {
        as: "users",
        through: "FavoritePlaces",
        foreignKey: "placeId",
      });
      this.belongsToMany(Tag, {
        as: "tags",
        through: "TagPlaces",
        foreignKey: "placeId",
      });
      this.hasMany(Photo, { foreignKey: "placeId" });
      this.hasMany(FeedBack, { foreignKey: "placeId" });
    }
  }
  Place.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    width: DataTypes.STRING,
    longitude: DataTypes.STRING,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};