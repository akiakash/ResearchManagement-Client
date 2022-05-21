const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  groupno: {
    type: String,
    required: true,
  },
  topicname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  leaderid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Topic", PostSchema);
