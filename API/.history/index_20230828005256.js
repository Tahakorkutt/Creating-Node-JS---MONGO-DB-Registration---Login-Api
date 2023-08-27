const express = require("express"); // expres import
const cors = require("cors"); 
const dotenv = require("dotenv");
const db = require("./config/database.js");
const Auth = require('./routes/auth.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"30mb", extended:true})); // dısarı dan veri gönderdildiğin de sıkıntı olmaması
app.use(express.urlencoded({limit:"30mb", extended:true}));

app.use('/', Auth)




app.get('/api', (req, res) => {
    res.json({ message: "deneme deneme" });
});




const PORT =  process.env.PORT  || 5000; //yedek port


db()

app.listen(PORT, () => {
    console.log("server is running on port: 5000"); 
});
