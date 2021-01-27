const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const countriesRouter = require("./countries.js");
const regionsRouter = require("./regions.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/countries", countriesRouter);

router.use("/regions", regionsRouter);

module.exports = router;
