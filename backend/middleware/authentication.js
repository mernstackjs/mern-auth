const jwt = require("jsonwebtoken");

exports.authentication = async (req, res, next) => {
  const token = req.headers.authentication;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({
      decoded,
    });
  } catch (error) {
    res.status(500).json({
      message: "error form jwt",
      error: error.message,
    });
  }
};
