const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const { Article, User, Region, Country } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const articles = await Article.findAll({
      include: [{ model: User }, { model: Country }],
      order: [["createdAt", "ASC"]],
    });
    res.json(articles);
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, countryId, title, body, imgUrl } = req.body;
    const article = await Article.create({
      userId,
      countryId,
      title,
      body,
      imgUrl,
    });
    res.json({ article });
  })
);

router.put(
  "/:articleId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const articleId = req.params.articleId;
    const id = Number(articleId);
    const { userId, countryId, title, body, imgUrl } = req.body;

    const article = await Article.findByPk(id);
    await article.update({
      userId,
      countryId,
      title,
      body,
      imgUrl,
    });

    res.json({
      article,
    });
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const article = await Article.findByPk(id);

    await article.destroy();

    return res.json({ message: "deleted" });
  })
);

module.exports = router;
