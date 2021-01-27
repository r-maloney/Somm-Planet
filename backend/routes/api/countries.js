const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Country } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const countries = await Country.findAll();
    res.json(countries);
  })
);

module.exports = router;
