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
          userId: 1,
          score: 10,
          comment: "Круто",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          userId: 1,
          score: 2,
          comment: "Плоховато",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          userId: 1,
          score: 10,
          comment: "мне понравился отдых!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          userId: 1,
          score: 10,
          comment: "Рекомендую!",
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
        {
          placeId: 4,
          userId: 2,
          score: 10,
          comment: "Искупался",
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
