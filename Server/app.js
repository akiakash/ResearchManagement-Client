const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

// app.use(express.json({ limit: "20mb", extended: true }));
// app.use(express.urlencoded({ limit: "20mb", extended: true }));

// app.use("/uploads", express.static("uploads"));
// app.use(bodyParser.json());

// import routes
const UserManagement = require("./Admin/routes/UserManagement");

// api paths
app.use("/UserManagement", UserManagement);

app.get("/", (req, res) => {
  res.send("We are on Home");
});

//connection to mongoDB
mongoose.connect(
  "mongodb+srv://akash:Akiakash1@cluster0.goear.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("Successfully Fucked Up")
);

//Server host
app.listen(3000);
