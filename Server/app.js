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
const StaffManagement = require("./Admin/routes/StaffManagement");
const ScheduleManagement = require("./Admin/routes/ScheduleManagement");
const MarksManagement = require("./Admin/routes/MarksManagement");
const DocumentManagement = require("./Admin/routes/DocumentManagement");
const TopicManagement = require("./Client/routes/TopicManagement");
const RequestManagement = require("./Client/routes/RequestManagement");
const RequestManagementAdmin = require("./Admin/routes/RequestManagementAdmin");
const Request = require("./Client/routes/RequestManagement");

// api paths
app.use("/UserManagement", UserManagement);
app.use("/StaffManagement", StaffManagement);
app.use("/ScheduleManagement", ScheduleManagement);
app.use("/MarksManagement", MarksManagement);
app.use("/DocumentManagement", DocumentManagement);
app.use("/TopicManagement", TopicManagement);
app.use("/RequestManagement", RequestManagement);
app.use("/RequestManagementAdmin", RequestManagementAdmin);
app.use("/Request", Request);

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
