const express = require("express");
const cors = require("cors"); 
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: "deneme deneme" });
});




const PORT =  process.env.PORT  || 5000;

app.listen(PORT, () => {
    console.log("server is running on port: 5000"); 
});
