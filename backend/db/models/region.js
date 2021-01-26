"use strict";
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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
