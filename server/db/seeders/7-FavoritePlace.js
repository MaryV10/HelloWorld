"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "FavoritePlaces",
    //   [
    //     {
    //       placeId: 1,
    //       userId: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FavoritePlaces", null, {});
  },
};
