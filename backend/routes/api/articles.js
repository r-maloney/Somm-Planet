const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Article } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const articles = await Article.findAll();
    res.json(articles);
  })
);

// router.get(
//   "/:regionId",
//   asyncHandler(async (req, res) => {
//     const id = req.params.regionId;
//     const articles = await Region.findAll({ where: { regionId: id } });
//     res.json(articles);
//   })
// );

module.exports = router;
