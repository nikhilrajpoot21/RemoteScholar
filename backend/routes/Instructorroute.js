const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/instructorController");

router.post("/signup", signup);

module.exports = router;