"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Regions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imgUrl: {
        type: Sequelize.STRING,
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Country",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Regions");
  },
};
