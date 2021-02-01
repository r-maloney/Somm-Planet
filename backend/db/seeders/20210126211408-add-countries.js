"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Countries",
      [
        {
          name: "France",
          description: "/images/winefolly-map-france.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Germany",
          description: "/images/winefolly-map-germany.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spain",
          description: "/images/winefolly-map-spain.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italy",
          description: "/images/winefolly-map-italy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Argentia",
          description: "/images/winefolly-map-argentina.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Countries", null, {});
  },
};
