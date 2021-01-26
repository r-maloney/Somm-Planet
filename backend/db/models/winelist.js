"use strict";
module.exports = (sequelize, DataTypes) => {
  const WineList = sequelize.define(
    "WineList",
    {
      wineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      listId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  WineList.associate = function (models) {
    // associations can be defined here
  };
  return WineList;
};
