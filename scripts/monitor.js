// Basic monitoring script

const os = require("os");

function showSystemStats() {
  console.log("CPU Load:", os.loadavg());
  console.log("Free Memory:", os.freemem() / 1024 / 1024, "MB");
  console.log("Uptime:", os.uptime(), "seconds");
}

showSystemStats();

// Experimental: AI anomaly detection (commented out)
// import { predictAnomaly } from "./ai-monitor.js";
// setInterval(() => predictAnomaly(), 60000);
