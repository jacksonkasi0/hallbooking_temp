const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  roomId: {
    type: mongoose.Types.ObjectId,
    ref: "room",
  },
  createdAT: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
