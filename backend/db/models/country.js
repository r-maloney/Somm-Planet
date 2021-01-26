"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Country.associate = function (models) {
    // associations can be defined here
    Country.hasMany(models.Region, { foreignKey: "countryId" });
  };
  return Country;
};
