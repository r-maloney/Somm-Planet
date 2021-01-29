const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Article, User, Region } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const articles = await Article.findAll({
      include: [{ model: User }, { model: Region }],
      order: [["createdAt", "DESC"]],
    });
    res.json(articles);
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, regionId, title, body, imgUrl } = req.body;
    const article = await Article.create({
      userId,
      regionId,
      title,
      body,
      imgUrl,
    });
    res.json({ article });
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
