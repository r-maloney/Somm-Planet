"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("WineLists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      wineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Wines",
        },
      },
      listId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Lists",
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
    return queryInterface.dropTable("WineLists");
  },
};
