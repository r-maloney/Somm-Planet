const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Region } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const regions = await Region.findAll();
    res.json(regions);
  })
);

module.exports = router;
