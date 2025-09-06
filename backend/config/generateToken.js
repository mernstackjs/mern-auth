const jwt = require("jsonwebtoken");

exports.generateToken = (user_id) => {
  return jwt.sign({ uid: user_id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
