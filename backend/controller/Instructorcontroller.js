const { instructors } = require("../data/instructors");

const signup = (req, res) => {
  const { name, email, password, bio, phone, location } = req.body;

  const exists = instructors.find((t) => t.email === email);
  if (exists) {
    return res.status(400).json({ message: "Email already registered" });
  }

  instructors.push({ name, email, password, bio, phone, location });
  return res.status(201).json({ message: "Instructor registered successfully" });
};

module.exports = { signup };