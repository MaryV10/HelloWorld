"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          placeId: 1,
          imageUrl: "маяк.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          imageUrl: "маяк2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          imageUrl: "маяк3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          imageUrl: "мото.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          imageUrl: "мото2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Photos", null, {});
  },
};
