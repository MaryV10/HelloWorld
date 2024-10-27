"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TagPlaces",
      [
        {
          placeId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 4,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TagPlaces", null, {});
  },
};
