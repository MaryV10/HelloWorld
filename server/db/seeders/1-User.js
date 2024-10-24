"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [        {
        nickname: "Мария",
        firstName: "Мария",
        secondName: "",
        email: "mary10@list.ru",
        password: await bcrypt.hash("Test123", 10),
        avatarUrl: 'https://ae01.alicdn.com/kf/HTB1303KcfBNTKJjSszeq6Au2VXaz/1730-Cute-Black-Cat-Baby-Wear-Glasses-Wall-Sticker-Art-Poster-For-Home-Decor-Silk-Canvas.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "Ник",
        firstName: "Никита",
        secondName: "",
        email: "1@1.ru",
        password: await bcrypt.hash("Privet111", 10),
        avatarUrl: 'https://ae01.alicdn.com/kf/HTB1303KcfBNTKJjSszeq6Au2VXaz/1730-Cute-Black-Cat-Baby-Wear-Glasses-Wall-Sticker-Art-Poster-For-Home-Decor-Silk-Canvas.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
