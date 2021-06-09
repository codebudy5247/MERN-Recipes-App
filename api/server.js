const express =require('express')

const colour=require('colors')

const logger =require("morgan") ;

const dotenv =require("dotenv");
const cors =require ("cors");

const connectDB =require ("./config/DB");

var app = express();

dotenv.config();

//Connect to DB
connectDB();

app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({  extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running....");
});

const PORT = process.env.PORT || 5001;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);