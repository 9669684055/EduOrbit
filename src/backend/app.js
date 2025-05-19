// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON in POST requests

const PORT = 5000;

// Sample route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
