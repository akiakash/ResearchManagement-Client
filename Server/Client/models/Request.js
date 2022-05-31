const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  researcharea: {
    type: String,
    required: true,
  },
  supervisorname: {
    type: String,
    required: true,
  },
  cosupervisorname: {
    type: String,
    required: true,
  },
  groupid: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Request", PostSchema);
