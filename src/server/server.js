import express from "express";  
import path from "path"; 
import { fileURLToPath } from "url";

const app = express(); 
const PORT = 3000; 

// = _dirname = 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

app.use(express.static(path.join(__dirname, '../')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../html/index.html")); 
}); 

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
