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
          comment: "Великолепно! Очень понравился маяк. Восхитительный вид",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          userId: 1,
          score: 9,
          comment: "Круто",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          userId: 2,
          score: 2,
          comment: "Чуть не упал с лодки, спасателей в заливе нет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          userId: 1,
          score: 10,
          comment: "мне понравился отдых! теперь хочу себе купить мотик",
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
