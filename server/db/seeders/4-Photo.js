"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          placeId: 1,
          imageUrl: "https://www.velograd.ru/upload/iblock/56c/56c5aaff578efe4a863fb19a967f43aa.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          imageUrl: "https://avatars.mds.yandex.net/i?id=c6a6d5d3e26e7c0158839c0f2855fbef7c1f9470-12518569-images-thumbs&n=13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          imageUrl: "https://avatars.mds.yandex.net/i?id=19bc9605d17312871552cd9e6225900819fa28a8-9226056-images-thumbs&n=13",
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
