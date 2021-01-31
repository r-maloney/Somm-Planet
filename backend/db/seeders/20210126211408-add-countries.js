"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Countries",
      [
        { name: "United States", createdAt: new Date(), updatedAt: new Date() },
        { name: "France", createdAt: new Date(), updatedAt: new Date() },
        { name: "Italy", createdAt: new Date(), updatedAt: new Date() },
        { name: "Germany", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Countries", null, {});
  },
};
