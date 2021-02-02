"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Regions",
      [
        {
          name: "Loire Valley",
          description:
            "Most famous for sauvignon blanc, muscadet, chenin blanc",
          imgUrl: "/images/regions/loire-valley.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bourdeaux",
          description:
            "Most famous for red blends, sauternais, semillon-sauvignon blanc",
          imgUrl: "/images/regions/bourdeaux.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Provence",
          description: "Most famous for rose, bandol (mourvedre)",
          imgUrl: "/images/regions/provence.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rhone Valley",
          description:
            "Most famous for GSM, syrah, marsanne-roussanne, voignier",
          imgUrl: "/images/regions/rhone-valley.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beaujolais",
          description: "Most famous for gamay",
          imgUrl: "/images/regions/beaujolais.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Burgundy",
          description:
            "Most famous for chardonnay, pinot noir, cremant de bourgogne, aligote",
          imgUrl: "/images/regions/burgundy.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alsace",
          description:
            "Most famous for pinot gris, riesling, gewurtztraminer, cremant d'alsace",
          imgUrl: "/images/regions/alsace.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Champagne",
          description: "Most famous for sparkling wine",
          imgUrl: "/images/regions/champage.jpg",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Regions", null, {});
  },
};
