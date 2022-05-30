const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  researcharea: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Staff", PostSchema);
