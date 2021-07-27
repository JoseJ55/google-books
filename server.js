const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// require("dotenv").config();

const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();

// Still need to config the database with heroku to push and access data.
mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.static(path.join(__dirname, "./client/build")))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
}


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})