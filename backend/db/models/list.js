"use strict";
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    "List",
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {}
  );
  List.associate = function (models) {
    // associations can be defined here
    let wineAssociation = {
      through: "WineList",
      foreignKey: "listId",
      otherKey: "wineId",
    };

    List.belongsTo(models.User, { foreignKey: "userId" });
    List.belongsToMany(models.Wine, wineAssociation);
  };
  return List;
};
