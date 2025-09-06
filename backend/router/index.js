const { Router } = require("express");

const router = Router();
const authRouter = require("./api/auth");
const userRouter = require("./api/user");

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;
