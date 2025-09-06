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

module.exports = router;
