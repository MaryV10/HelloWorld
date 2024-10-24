"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Place, Feedback }) {
      this.belongsToMany(Place, {
        as: "places",
        through: "FavoritePlaces",
        foreignKey: "userId",
      });
      this.hasMany(Feedback, { foreignKey: "userId" });

      this.hasMany(Place, { foreignKey: "userId" });

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
