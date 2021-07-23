const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const routes = require("./routes")
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})