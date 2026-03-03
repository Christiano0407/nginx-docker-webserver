import express from "express";  
import path from "path"; 
import { fileURLToPath } from "url";

const app = express(); 
const PORT = 3000; 
// === Only Proved Nginx Proxy === //
const HOST = "0.0.0.0"; 

// = _dirname in ES Modules = 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

// === Environment Variable ===
const INSTANCE = process.env.INSTANCE_NAME || "unknown"; 

// === Debug Endpoint
app.get("/health", (req, res) => {
  res.json({
    instance: INSTANCE, 
    hostname: process.env.HOSTNAME, 
    node_env:process.env.NODE_ENV
  }); 
}); 

// === Static Files (Only Files Public) | src ===
app.use(express.static(path.join(__dirname, '../')));

// === Fullback HTML | SPA ===
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../html/index.html")); 
}); 

// === PORT | Server ===
app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
