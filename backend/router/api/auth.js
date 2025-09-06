import { Router } from "express";
import User from "../model/user";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Must fill all fields",
      });
    }
    const isExit = await User.find({ email });
    if (isExit)
      return res.status(400).json({
        message: `this ${email} is already registered`,
      });

    const user = new User({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "new user is registered success",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Must fill all fields",
      });
    }
    const user = await User.find({ email });
    if (!user)
      return res.status(404).json({
        message: `Don't found this user`,
      });

    const isMatched = await user.comparePassword(password);
    if (!isMatched)
      return res.status(401).json({
        message: "invalid credential",
      });
    res.status(201).json({
      message: "new user is registered success",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
});

module.exports = router;
