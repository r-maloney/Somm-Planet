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
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      winery: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      varietal: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      vintage: {
        type: DataTypes.STRING(20),
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
