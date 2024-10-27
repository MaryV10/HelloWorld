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
          placeId: 1,
          imageUrl: "https://i.pinimg.com/originals/ba/bd/6d/babd6d37eb2dd965c7f1dfb516d54094.jpg",
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
        {
          placeId: 3,
          imageUrl: "https://i.pinimg.com/originals/bc/ac/9e/bcac9edce66abe28422594c6e19189a5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          imageUrl: "https://avatars.mds.yandex.net/i?id=9992d5f751b39020957ec9668c0a7b53475bb1f8-9857494-images-thumbs&n=13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          imageUrl: "https://images.wallpaperscraft.com/image/single/lake_mountain_tree_36589_2650x1600.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          imageUrl: "https://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Spring_Cold_river_in_spring_067776_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          imageUrl: "https://wallpapers.com/images/file/hd-waterfall-glacier-national-park-s-staircase-falls-gimnw3ilkheiqrfz.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          imageUrl: "https://puzzleit.ru/files/puzzles/191/190930/_original.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          imageUrl: "https://i.pinimg.com/originals/4b/23/ac/4b23ac0a38f52dc3bfe87cc4b90e36f9.jpg",
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
