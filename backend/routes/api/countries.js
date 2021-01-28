const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Country, Region } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const countries = await Country.findAll();
    res.json(countries);
  })
);

router.get(
  "/:countryId",
  asyncHandler(async (req, res) => {
    const id = req.params.countryId;
    const regions = await Region.findAll({ where: { countryId: id } });
    res.json(regions);
  })
);

module.exports = router;
