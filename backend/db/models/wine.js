"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define(
    "Wine",
    {
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      winery: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      varietal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vintage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
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
