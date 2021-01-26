'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    regionId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    winery: DataTypes.STRING,
    type: DataTypes.STRING,
    varietal: DataTypes.STRING,
    vintage: DataTypes.STRING,
    description: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Wine.associate = function(models) {
    // associations can be defined here
  };
  return Wine;
};