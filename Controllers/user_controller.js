const userModel = require("../Models/users_model");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    let gettingUser = await userModel.find();
    res.json(gettingUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const registerUser = async (req, res) => {
//   try {
//     let user = await userModel.findOne({ email: req.body.email });
//     if (user) {
//       return res
//         .status(400)
//         .json({ message: "User with this email is already Exists" });
//     } else {
//       let createUser = new userModel(req.body);
//       let salt = await bcrypt.genSalt(10);
//       let hashPassword = await bcrypt.hash(createUser.password, salt);
//       createUser.password = hashPassword;
//       await createUser.save();
//       res
//         .status(201)
//         .json({ message: "User registered successfully", user: createUser });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const loginUser = async (req, res) => {
//   try {
//     const userData = req.body;
//     let user = await userModel.findOne({ email: userData.email });
//     if (!user) {
//       return res.status(400).json({ message: "User does not exists" });
//     }
//     const isMatch = await bcrypt.compare(userData.password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Incorrect password" });
//     }
//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    let user = await userModel.findOne({ email: userData.email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Compare plaintext password with the hashed password in the database
    const isMatch = await bcrypt.compare(userData.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    let createUser = new userModel(req.body);
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(createUser.password, salt);
    createUser.password = hashPassword;

    await createUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: createUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  getUser,
  loginUser,
};
