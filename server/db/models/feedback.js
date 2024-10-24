'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Place }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Place, { foreignKey: "placeId" });
    }
  }
  Feedback.init({
    userId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};