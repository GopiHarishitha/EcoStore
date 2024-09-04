const User = require("../models/User");

const createUser = async (username, password, email, searchHistory = []) => {
  try {
    const user = new User({
      username,
      password,
      email,
      searchHistory,
      purchaseHistory: [],
    });
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const findUserByUsername = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

const loginUser = async (username, password) => {
  try {
    const user = await findUserByUsername(username);
    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid password");

    return user;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
};

module.exports = {
  createUser,
  findUserByUsername,
  loginUser,
};
