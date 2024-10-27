"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          title: "велопрогулка",
          color: "#fb4187",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "пробежка",
          color: "#00ff00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "рыбалка",
          color: "#0000ff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "лыжи",
          color: "#336b8b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
