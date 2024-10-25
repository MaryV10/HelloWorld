"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Feedbacks",
      [
        {
          placeId: 1,
          userId: 1,
          score: 10,
          comment: "Великолепно!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          userId: 2,
          score: 3,
          comment: "Так себе!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          userId: 2,
          score: 10,
          comment: "Рыбку поймал",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Feedbacks", null, {});
  },
};
