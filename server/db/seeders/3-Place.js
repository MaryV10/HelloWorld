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
          width: "60.042590",
          longitude: "29.542446",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Мотопрогулка около Изумрудного озера",
          description: "Маршруты для любого уровня подготовки. Можно спланировать маршруты и мототуры на несколько часов или целый день",
          width: "60.15122",
          longitude: "30.47769",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Лужские Мальдивы",
          description: "Шалово-Перечицкий карьер – жители Санкт-Петербурга называют его «Лужские Мальдивы» - карьер песчаного происхождения находится на территории Шалово-Перечицкого заказника. Охраняемый природный объект расположен примерно в 2 км к северо-востоку от Луги",
          width: "58.78518",
          longitude: "30.023696",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Домбай",
          description: "Животрепещущие горные массивы, которые вызывают у меня глубокое чувство гордости и восхищения!",
          width: "43.2915888000845",
          longitude: "41.66521859013773",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ветряные генераторы",
          description: "Крутое место для фотосессии на полях и любования закатом!",
          width: "44.68958283654245",
          longitude: "42.003855974642114",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Остров Веселый на Вуоксе",
          description: "Отличное место для рыбалки и отдыха от шумного города!",
          width: "60.668430",
          longitude: "29.772621",
          status: 'approved',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Зимняя рыбалка в Лужском районе",
          description: "Отличное место для рыбалки и отдыха от шумного города!",
          width: "58.752101 ",
          longitude: "29.762542",
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
