"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Places",
      [
        {
          title: "На великах по осеннему лесу",
          description: "едем",
          width: "59.95",
          longitude: "30.3",
          status: 'pending',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Прогулка по осеннему лесу",
          description: "прогулка",
          width: "59.95",
          longitude: "31.3",
          status: 'pending',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Бегаем сломя голову",
          description: "бегаем",
          width: "50.95",
          longitude: "30.3",
          status: 'approved',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Трасса для катания на мотиках",
          description: "газуем",
          width: "59.44",
          longitude: "30.3",
          status: 'approved',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Катаемся на ватрушках с горы",
          description: "главное не перевернуться",
          width: "59.35",
          longitude: "30.5",
          status: 'approved',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Рыбачим на реке Неве ооло Шлиссельбурга",
          description: "рыбачим",
          width: "30.95",
          longitude: "30.3",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Places", null, {});
  },
};
