const bcrypt = require("bcrypt");
const user = require('../model/User'); // Make sure to import your User model
const jwt = require('jsonwebtoken');


exports.Signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the email already exists
    const emailAlreadyExist = await user.findOne({ email });
    if (emailAlreadyExist) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new user({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(200).send({ message: "User registered successfully",newUser });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.login = async(req,res) => {    // made an api for user login
    try {
        const {email,password} = req.body;
        const userData = await user.findOne({email});
        if (!userData) {
            return res.status(400).json({ message: "Data not found" });
          }


          const isMatch = await bcrypt.compare(password, userData.password);
          if (!isMatch) {
            return res.status(401).json({ message: "Invalid password"  });
          }
          
         const token = jwt.sign (
                { userId: userData._id, email: userData.email },
                "jwtkey",
                { expiresIn:'24h' }
         );


          
          res.status(200).json({ message: "Login successful" , token });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    };