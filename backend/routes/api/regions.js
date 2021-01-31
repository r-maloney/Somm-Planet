const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Region, Wine } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const regions = await Region.findAll({ include: [{ model: Wine }] });
    res.json(regions);
  })
);

module.exports = router;
