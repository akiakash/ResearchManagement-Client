const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  groupid: {
    type: String,
    required: true,
  },
  studentid: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Marks", PostSchema);
