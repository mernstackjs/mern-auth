const { Router } = require("express");
const User = require("../../model/user");
const { authentication } = require("../../middleware/authentication");

const router = Router();

router.get("/me", authentication, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "current user", user });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
});

module.exports = router;
