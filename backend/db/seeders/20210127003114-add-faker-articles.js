"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const faker = require("faker");

    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          title: faker.lorem.sentence(),
          regionId: 1,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 2,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 3,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 4,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 5,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 6,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 7,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 8,
          userId: 1,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 1,
          userId: 2,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 2,
          userId: 2,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 3,
          userId: 2,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 4,
          userId: 2,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 5,
          userId: 3,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 6,
          userId: 3,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 7,
          userId: 3,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.lorem.sentence(),
          regionId: 8,
          userId: 3,
          body: faker.lorem.paragraphs(),
          imgUrl: faker.image.nightlife(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};