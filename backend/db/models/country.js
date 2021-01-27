"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {}
  );
  Country.associate = function (models) {
    // associations can be defined here
    Country.hasMany(models.Region, {
      foreignKey: "countryId",
      onDelete: "cascade",
    });
  };
  return Country;
};
