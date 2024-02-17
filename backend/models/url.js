const mongoose = require("mongoose");
const urlschema = new mongoose.Schema(
  {
    shortid: {
      type: String,
      required: true,
      unique: true,
    },
    originalurl: {
      type: String,
      required: true,
    },
    visithistory: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { timestamp: true }
);
const URL = mongoose.model("url", urlschema);
module.exports = URL;
