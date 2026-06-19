const express = require("express");
const cors = require("cors");
const path = require("path");

const studentRoutes     = require("./routes/Studentroutes");
const instructorRoutes  = require("./routes/instructorRoutes");
const loginRoute        = require("./routes/loginRoute");

const app = express();
const PORT = 8080;

/* ── Middleware ── */
app.use(cors({ origin: "http://localhost:5173" })); // Vite dev server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ── API Routes ── */
app.use("/api/students",    studentRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/login",       loginRoute);

/* ── Health check ── */
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

/* ── Start server ── */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});