const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RequestManagement", PostSchema);
