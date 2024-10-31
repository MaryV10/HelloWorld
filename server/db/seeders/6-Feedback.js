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
        {
          placeId: 3,
          userId: 2,
          score: 10,
          comment: "Я как будто бы побывал на Мальдивах, кайф!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          userId: 2,
          score: 1,
          comment: "Покусали комары!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          userId: 2,
          score: 10,
          comment: "Место силы! Я вернусь сюда вновь",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          userId: 1,
          score: 10,
          comment: "Место силы! Я вернусь сюда вновь",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          userId: 2,
          score: 7,
          comment: "Я продрог и устал. Не советую тем, кто не любит долго ходить",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 7,
          userId: 2,
          score: 5,
          comment: "Было минус 30 и я меня чуть не съел медведь",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          userId: 2,
          score: 9,
          comment: "Поймал щуку и карпа",
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
