const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Document", PostSchema);
