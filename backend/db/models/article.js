'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    regionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};