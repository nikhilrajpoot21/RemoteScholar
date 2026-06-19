const { students } = require("../data/students");

const signup = (req, res) => {
  const { name, email, password, location } = req.body;

  const exists = students.find((s) => s.email === email);
  if (exists) {
    return res.status(400).json({ message: "Email already registered" });
  }

  students.push({ name, email, password, location });
  return res.status(201).json({ message: "Student registered successfully" });
};

module.exports = { signup };