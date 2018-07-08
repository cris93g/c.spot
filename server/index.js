require("dotenv").config();
// const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");
const { json } = require("body-parser");
const electronicsCtrl = require("./controller");
// const mocha = require("mocha");
const app = express();
app.use(json());
app.use(cors());
// mongoose.connect(
//   "mongodb://admin:admin1@ds263710.mlab.com:63710/heroku_1xpzjkl4"
// );
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// app.post("/api/electronics", electronicsCtrl.ad)

// mongoose.connection
//   .once("open", function() {
//     console.log("connection had been made,now make fireworks");
//   })
//   .on("error", function(error) {
//     console.log("connection error");
//   });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`UR SERVER IS UP AND RUNNING ON port ${PORT}`);
});
