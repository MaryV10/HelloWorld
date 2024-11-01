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
          color: "#f2aa5e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "пробежка",
          color: "#b5f761",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "рыбалка",
          color: "#00e4ff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "лыжи",
          color: "#0059ff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "мото",
          color: "#95947d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "водные прогулки",
          color: "#1e82ec",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "лес",
          color: "#3c9156",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "шашлык",
          color: "#a06713",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "купание",
          color: "#02f9ea",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "сноуборд",
          color: "#faf600",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "горы",
          color: "#405eae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "романтик",
          color: "#ae4093",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "история",
          color: "#ffadeb",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "грибы",
          color: "#f3c8d9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "поля",
          color: "#f3f3c8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "вейксерф",
          color: "#c8f3dc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "корпоратив",
          color: "#20b792",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "актив",
          color: "#ec3030",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "животные",
          color: "#ed7676",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "пикник",
          color: "#b1fa9c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "фотосессия",
          color: "#483D8B",
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
