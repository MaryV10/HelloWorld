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
        {
          placeId: 3,
          imageUrl: "мальдивы.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          imageUrl: "мальдивы2.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
                {
          placeId: 3,
          imageUrl: "мальдивы3.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          imageUrl: "мальдивы4.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          imageUrl: "никита1.1.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          imageUrl: "никита1.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          imageUrl: "никита1.2.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          imageUrl: "никита2.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          imageUrl: "никита2.2.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          imageUrl: "никита2.1.jfif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          imageUrl: "вуокса.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          imageUrl: "вуокса4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          imageUrl: "вуокса2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          imageUrl: "вуокса3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 7,
          imageUrl: "зима.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 7,
          imageUrl: "зима1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 7,
          imageUrl: "зима3.jpg",
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
