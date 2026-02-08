const express = require("express");
const cors = require("cors");
const os = require("os-utils");

const app = express();
const PORT = 4000;

app.use(cors());

let stats = {
  cpuLoad: null,
  timestamp: null,
};

setInterval(() => {
  os.cpuUsage((value) => {
    stats.cpuLoad = Number((value * 100).toFixed(2));
    stats.timestamp = new Date().toISOString();
    console.log(`⚙️ CPU LOAD: ${stats.cpuLoad}%`);
  });
}, 2000);

app.get("/", (req, res) => {
  res.send("🟢 Backend running");
});

app.get("/api/logs", (req, res) => {
  res.json([stats]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 ENGINE READY on port ${PORT}`);
});
