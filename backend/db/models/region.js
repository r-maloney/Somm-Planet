"use strict";
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
    },
    {}
  );
  Region.associate = function (models) {
    // associations can be defined here
    Region.belongsTo(models.Country, { foreignKey: "countryId" });
    Region.hasMany(models.Article, { foreignKey: "regionId" });
    Region.hasMany(models.Wine, { foreignKey: "regionId" });
  };
  return Region;
};
