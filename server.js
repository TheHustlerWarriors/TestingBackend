import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// API route
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Render backend 🚀",
    time: new Date().toLocaleString()
  });
});

// Serve React build
app.use(express.static(path.join(__dirname, "dist")));

// React router fallback (Express v5 safe)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
