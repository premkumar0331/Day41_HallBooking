const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    requied: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("customerData", roomSchema);
