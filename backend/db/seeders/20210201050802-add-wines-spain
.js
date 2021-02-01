"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fetch = require("node-fetch");

    //const KEY = process.env.DB_API_KEY;

    const wineUrlBuilder = (
      //apiKey = KEY,
      keyword = "red",
      skip = 0,
      limit = 1,
      winetype = "none"
    ) => {
      return `https://quiniwine.com/api/pub/wineKeywordSearch/${keyword}/${skip}/${limit}?winetype=${winetype}`;
    };

    const regions = [
      "La Rioja",
      "Aragon",
      "Murcia",
      "Valencia",
      "Extremadura",
      "Navarra",
      "Catalunya",
    ];

    const seederArr = [];

    for (let i = 0; i < regions.length; i++) {
      let keyword = `${regions[i]}%20spain`;
      const url = wineUrlBuilder(keyword, 0, 10, "none");

      const rawWines = await fetch(url);
      const wineJson = await rawWines.json();
      wineJson.items.forEach((wine) => {
        seederArr.push({
          regionId: i + 15,
          name: wine.Name,
          winery: wine.Winery,
          type: wine.Area || wine.Province,
          varietal: wine.Varietal,
          vintage: wine.vintage,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    }

    return queryInterface.bulkInsert("Wines", seederArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Wines", null, {});
  },
};
