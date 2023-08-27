const express = require("express");
const cors = require("cors"); 

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: "deneme deneme" });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("server is running on port: 5000");
});
