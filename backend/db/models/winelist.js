'use strict';
module.exports = (sequelize, DataTypes) => {
  const WineList = sequelize.define('WineList', {
    wineId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  WineList.associate = function(models) {
    // associations can be defined here
  };
  return WineList;
};