const { Router } = require("express");

const router = Router();
const authRouter = require("./api/auth");
router.use("/auth", authRouter);

module.exports = router;
