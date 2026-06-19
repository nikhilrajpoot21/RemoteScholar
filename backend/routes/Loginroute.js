const express = require("express");
const router = express.Router();

// Import the in-memory stores via a shared data module
const { students } = require("../data/students");
const { instructors } = require("../data/instructors");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  const student = students.find(
    (s) => s.email === email && s.password === password
  );
  if (student) {
    const { password: _, ...safe } = student;
    return res.status(200).json({ role: "student", user: safe });
  }

  const instructor = instructors.find(
    (t) => t.email === email && t.password === password
  );
  if (instructor) {
    const { password: _, ...safe } = instructor;
    return res.status(200).json({ role: "instructor", user: safe });
  }

  return res.status(401).json({ message: "Invalid email or password" });
});

module.exports = router;