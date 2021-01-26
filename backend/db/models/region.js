'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  }, {});
  Region.associate = function(models) {
    // associations can be defined here
  };
  return Region;
};