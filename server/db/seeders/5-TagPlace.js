"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TagPlaces",
      [
        {
          placeId: 1,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          tagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          tagId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 1,
          tagId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          placeId: 2,
          tagId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 2,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          tagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 3,
          tagId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          placeId: 4,
          tagId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          tagId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 5,
          tagId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 6,
          tagId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 7,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          placeId: 7,
          tagId: 20,
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
