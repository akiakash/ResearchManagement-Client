const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  groupid: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  allocatedpanel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Schedule", PostSchema);
