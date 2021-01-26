"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Wines", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      regionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Region",
        },
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      winery: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      varietal: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      vintage: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      imgUrl: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Wines");
  },
};
