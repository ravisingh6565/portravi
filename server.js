const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Download Route
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "port.zip");
  res.download(filePath);
});

// Home Page with Download Button
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Download ZIP</title>
        <style>
          body { 
            font-family: Arial; 
            text-align: center; 
            margin-top: 100px; 
          }
          button {
            padding: 12px 25px;
            font-size: 18px;
            cursor: pointer;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
          }
          button:hover {
            background: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>Download Project ZIP</h1>
        <a href="/download">
          <button>Download ZIP</button>
        </a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});