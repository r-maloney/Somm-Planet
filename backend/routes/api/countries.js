const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Country, Region } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const countries = await Country.findAll({ include: [{ model: Region }] });
    res.json(countries);
  })
);

module.exports = router;
