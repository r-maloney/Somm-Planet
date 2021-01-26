"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
    },
    {}
  );
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.Region, { foreignKey: "regionId" });
    Article.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Article;
};
