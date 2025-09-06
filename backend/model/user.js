const { Schema, model } = require("mongoose");
const argon = require("argon2");
const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timeseries: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const hashedPassword = await argon.hash(this.password, 12);
    this.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function () {
  return argon.verify(this.password, password);
};

const User = model("User", userSchema);
module.exports = User;
