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
        { name: "Australia", createdAt: new Date(), updatedAt: new Date() },
        { name: "Spain", createdAt: new Date(), updatedAt: new Date() },
        { name: "Georgia", createdAt: new Date(), updatedAt: new Date() },
        { name: "Argentia", createdAt: new Date(), updatedAt: new Date() },
        { name: "Chile", createdAt: new Date(), updatedAt: new Date() },
        { name: "South Africa", createdAt: new Date(), updatedAt: new Date() },
        { name: "Greece", createdAt: new Date(), updatedAt: new Date() },
        { name: "Austria", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Countries", null, {});
  },
};
