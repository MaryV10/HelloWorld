"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Places",
      [
        {
          title: "Толбухин маяк",
          description: "Один из старейших российских маяков, построенный по приказу Петра I. Установлен на искусственном каменистом островке площадью 70 на 70 метров[4], лежащем в 2,8 мили к WNW от западной оконечности острова Котлин. Можно доехать на лодке!",
          width: "60.04424",
          longitude: "29.53923",
          status: 'pending',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Мотопрогулка около Изумрудного озера",
          description: "Маршруты для любого уровня подготовки. Можно спланировать маршруты и мототуры на несколько часов или целый день",
          width: "60.15122",
          longitude: "30.47769",
          status: 'pending',
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
