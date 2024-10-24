"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Place, FeedBack }) {
      this.belongsToMany(Place, {
        as: "places",
        through: "FavoritePlaces",
        foreignKey: "userId",
      });
      this.hasMany(FeedBack, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      nickname: DataTypes.STRING,
      firstName: DataTypes.STRING,
      secondName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatarUrl: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
