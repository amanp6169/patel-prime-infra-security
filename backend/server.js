const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

app.post("/save", async (req, res) => {
  const { full_name, phone, service_required } = req.body;

  if (!full_name || !phone || !service_required) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await pool.query(
      `INSERT INTO consultation_requests (full_name, phone, service_required)
       VALUES ($1, $2, $3)`,
      [full_name, phone, service_required]
    );

    res.status(201).json({ message: "Saved Successfully" });
  } catch (err) {
    console.error("DB insert error:", err);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
