"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define(
    "Wine",
    {
      regionId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      winery: DataTypes.STRING,
      type: DataTypes.STRING,
      varietal: DataTypes.STRING,
      vintage: DataTypes.STRING,
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
    },
    {}
  );
  Wine.associate = function (models) {
    // associations can be defined here
    let listAssociation = {
      through: "WineList",
      foreignKey: "wineId",
      otherKey: "listId",
    };

    Wine.belongsTo(models.Region, { foreignKey: "regionId" });
    Wine.belongsToMany(models.List, listAssociation);
  };
  return Wine;
};
