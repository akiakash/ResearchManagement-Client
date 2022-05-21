const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  requestdocument: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RequestManagement", PostSchema);
