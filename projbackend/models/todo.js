const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 600,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    owneremail: {
        type: String,
        trim: true,
        required: true,
    },
    ownerrole: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);